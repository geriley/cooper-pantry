import { Controller, Post, Body } from '@nestjs/common';
import { TwilioService } from '../services/twilio/twilio.service';
import { IAddBotRequestDTO } from '@cooper/api-interfaces';
import { ApiBody } from '@nestjs/swagger';

@Controller('communications')
export class CommunicationsController {
    constructor(private twilioService: TwilioService) { }
    @Post('chatAccessToken')
    public getChatAccessToken(@Body() req: { identity: string }): { jwt: string } {
        return {
            jwt: this.twilioService.generateChatAccessToken(req)
        };
    }

    @Post('addBot')
    @ApiBody({})
    public async addChatBot(@Body() req: IAddBotRequestDTO): Promise<void> {
        await this.twilioService.addBotToChannel(req);
    }
}
