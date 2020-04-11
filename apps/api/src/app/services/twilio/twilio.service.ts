import { Injectable } from '@nestjs/common';
import { environment } from '../../../environments/environment';
import * as twilio from 'twilio';

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
}