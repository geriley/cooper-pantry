import { Controller, Post } from '@nestjs/common';

@Controller('communications')
export class CommunicationsController {
    @Post('chatAccessToken')
    public getChatAccessToken() {

    }

    @Post('addBot')
    public addChatBot() {
        
    }
}
