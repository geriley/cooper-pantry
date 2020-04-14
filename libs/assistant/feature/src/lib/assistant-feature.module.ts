import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiServicesModule } from '@cooper/api-services';
import { NbChatModule } from '@nebular/theme';
import { BotChatComponent } from './components/bot-chat.component';

@NgModule({
    imports: [
        CommonModule, 
        ApiServicesModule,
        NbChatModule,
    ],
    declarations: [
        BotChatComponent,
    ],
    exports: [
        BotChatComponent,
    ]
})
export class AssistantFeatureModule { }
