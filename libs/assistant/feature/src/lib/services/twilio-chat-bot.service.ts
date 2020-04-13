import { Injectable, OnDestroy } from '@angular/core';
import { CommunicationsDataService, UserAccessService } from '@cooper/api-services';
import { Client } from 'twilio-chat';
import { CooperResourceType } from '@cooper/api-interfaces';
import { Message } from 'twilio-chat/lib/message';
import { Subject } from 'rxjs';
import { scan, takeUntil } from 'rxjs/operators';

interface IChatMessage {
    text: string,
    date: Date,
    reply: boolean,
    user: {
        name: string,
        avatar: string,
    },
}

@Injectable()
export class TwilioChatBotService implements OnDestroy {
    constructor(private httpService: CommunicationsDataService, private user: UserAccessService) { }
    private currentId = '4';
    private send = new Subject<string>();
    private newMsg = new Subject<IChatMessage>();
    private destroyed = new Subject<void>();
    public messages = this.newMsg.pipe(
        scan((acc, curr) => [...acc, curr], [])
    );

    public async connect() {
        const user = await this.user.getById(this.currentId).toPromise();
        const userChannel = user.attributes ? user.attributes.chatBotChannelSid : undefined;
        const token = await this.httpService.getChatToken({ identity: this.currentId }).toPromise();
        const client = await Client.create(token);
        if (userChannel) {
            const channel = (await client.getChannelBySid(userChannel));
            channel.on('messageAdded', (msg: Message) => {
                const isCurrentUser = msg.author === user.id;
                this.newMsg.next({
                    text: msg.body,
                    date: new Date(),
                    reply: isCurrentUser,
                    user: {
                        name: isCurrentUser ? 'You' : 'Cooper Bot',
                        avatar: isCurrentUser ? undefined : 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png'
                    }
                });
            });

            this.send.pipe(
                takeUntil(this.destroyed)
            ).subscribe((msg) => channel.sendMessage(msg));

        } else {
            const channel = await client.createChannel();
            channel.join();
            this.updateUserChannel(channel.sid);
        }
    }

    public sendMessage(msg: { message: string }) {
        this.send.next(msg.message);
    }

    private updateUserChannel(channelSid: string) {
        this.user.updateUser({
            id: this.currentId,
            type: CooperResourceType.User,
            attributes: {
                chatBotChannelSid: channelSid,
            }
        }).toPromise();
    }

    public ngOnDestroy(): void {
        this.destroyed.next();
    }
}