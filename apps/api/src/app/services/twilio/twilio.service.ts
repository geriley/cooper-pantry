import { Injectable } from '@nestjs/common';
import { environment } from '../../../environments/environment';
import * as twilio from 'twilio';
import { IAddBotRequestDTO } from '@cooper/api-interfaces';
import { Client } from 'twilio-chat';
import { WebhookListInstanceCreateOptions } from 'twilio/lib/rest/autopilot/v1/assistant/webhook';

interface TwilioChatTokenRequest {
    identity: string;
}

@Injectable()
export class TwilioService {
    public generateChatAccessToken(req: TwilioChatTokenRequest) {
        const twilioAccountSid = environment.production ? process.env.TWILIO_ACCOUNT_SID : environment.twilioAccount;
        const twilioApiKey = environment.production ? process.env.TWILIO_API_KEY : environment.twilioChatApiKey;
        const twilioApiSecret = environment.production ? process.env.TWILIO_CHAT_API_SECRET : environment.twilioChatApiSecret;

        const serviceSid = environment.production ? process.env.TWILIO_CHAT_SERVICE_SID : environment.twilioChatSid;

        const chatGrant = new twilio.jwt.AccessToken.ChatGrant({
            serviceSid: serviceSid,
        });

        const token = new twilio.jwt.AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret, { identity: req.identity });
        token.addGrant(chatGrant);
        return token.toJwt();
    }

    public async addBotToChannel(req: IAddBotRequestDTO): Promise<void> {
        const twilioAccountSid = environment.production ? process.env.TWILIO_ACCOUNT_SID : environment.twilioAccount;
        const twilioAuthToken = environment.production ? process.env.TWILIO_AUTH_TOKEN : environment.twilioAuthToken;
        const serviceSid = environment.production ? process.env.TWILIO_CHAT_SERVICE_SID : environment.twilioChatSid;
        const url = environment.production ? process.env.TWILIO_CHAT_AUTOPILOT_URL : environment.twilioChatAutopilotUrl;

        const client = new twilio.Twilio(twilioAccountSid, twilioAuthToken);
        const channel = await client.chat.services(serviceSid)
            .channels(req.channelSid);
        const list = await channel
            .webhooks.list();
        const hasWebhookAlready = list.some((i) => i.url === url);

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
}
