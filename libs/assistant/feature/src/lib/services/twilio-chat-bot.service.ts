import { Injectable, OnDestroy } from '@angular/core';
import { CommunicationsDataService, UserAccessService } from '@cooper/api-services';
import { Client } from 'twilio-chat';
import { CooperResourceType } from '@cooper/api-interfaces';
import { Message } from 'twilio-chat/lib/message';
import { Subject } from 'rxjs';
import { scan, takeUntil, filter } from 'rxjs/operators';

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
        const token = await this.httpService.getChatToken({ identity: this.currentId }).toPromise();
        const client = await Client.create(token);
        const channels = (await client.getSubscribedChannels())
        for(const c of channels.items) {
            if (c.createdBy === user.id) {
                await c.delete();
            } else {
                await c.leave();
            }
        }

        const channel = await client.createChannel();
        await channel.join();
        channel.on('messageAdded', (msg: Message) => {
            const isCurrentUser = msg.author === user.id;
            this.newMsg.next({
                text: msg.body,
                date: msg.dateUpdated,
                reply: isCurrentUser,
                user: {
                    name: isCurrentUser ? 'You' : 'Cooper Bot',
                    avatar: isCurrentUser ? undefined : 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png'
                }
            });
        });


        this.send.pipe(
            takeUntil(this.destroyed)
        ).subscribe((msg) => {
            channel.sendMessage(msg)
        });
        this.httpService.addChatBot({ channelSid: channel.sid }).toPromise();

    }

    public sendMessage(msg: { message: string }) {
        this.send.next(msg.message);
    }


    public ngOnDestroy(): void {
        this.destroyed.next();
    }
}