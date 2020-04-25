import { IAddBotRequestDTO } from '@cooper/api-interfaces';
import { Injectable } from '@nestjs/common';
import * as twilio from 'twilio';

interface TwilioChatTokenRequest {
    identity: string;
}

@Injectable()
export class TwilioService {
    public generateChatAccessToken(req: TwilioChatTokenRequest) {
        const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
        const twilioApiKey = process.env.TWILIO_API_KEY;
        const twilioApiSecret = process.env.TWILIO_CHAT_API_SECRET;

        const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;

        const chatGrant = new twilio.jwt.AccessToken.ChatGrant({
            serviceSid: serviceSid,
        });

        const token = new twilio.jwt.AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret, { identity: req.identity });
        token.addGrant(chatGrant);
        return token.toJwt();
    }

    public async addBotToChannel(req: IAddBotRequestDTO): Promise<void> {
        const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
        const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
        const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;
        const url = process.env.TWILIO_CHAT_AUTOPILOT_URL;

        const client = this.generateClient();

        client.chat.services(serviceSid)
            .channels(req.channelSid)
            .webhooks
            .create({
                configuration: {
                    url: url,
                    method: 'POST',
                    filters: ['onMessageSent'],

                },
                type: 'webhook'
            });
    }

    public async sendSMS(msg: string, numbers: string[]) {
        const client = this.generateClient();
        const messages = numbers.filter((n) => n && n.length > 0)
            .map((toNumber) => {
                return client.messages
                    .create({
                        body: msg,
                        from: process.env.TWILIO_FROM_PHONE,
                        to: toNumber,
                    });
            });
        await Promise.all(messages);
    }

    private generateClient() {
        const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
        const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
        return new twilio.Twilio(twilioAccountSid, twilioAuthToken);
    }
}
