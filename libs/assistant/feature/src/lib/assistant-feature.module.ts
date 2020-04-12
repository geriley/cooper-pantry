import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotChatComponent } from './components/bot-chat.component';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';

@NgModule({
    imports: [CommonModule, ChatModule],
    declarations: [
        BotChatComponent,
    ],
    exports: [
        BotChatComponent,
    ]
})
export class AssistantFeatureModule { }
