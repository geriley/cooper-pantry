import { Controller, Post, Body } from '@nestjs/common';
import { TwilioService } from '../services/twilio/twilio.service';

@Controller('communications')
export class CommunicationsController {
    constructor(private twilioService: TwilioService) { }
    @Post('chatAccessToken')
    public getChatAccessToken(@Body() req: { identity: string }): string {
        return this.twilioService.generateChatAccessToken(req);
    }

    @Post('addBot')
    public addChatBot() {

    }
}
