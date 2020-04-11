import { TwilioService } from '../../services/twilio/twilio.service';
import { CommunicationsController } from '../communication.controller';
import { Module } from '@nestjs/common';

@Module({
    providers: [TwilioService],
    controllers: [CommunicationsController]
})
export class CommunicationHttpModule { }