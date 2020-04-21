import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiServicesModule } from '@cooper/api-services';
import { NbChatModule, NbFocusMonitor, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { BotChatComponent } from './components/bot-chat.component';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
    imports: [
        CommonModule, 
        ApiServicesModule,
        NbChatModule,
        NbLayoutModule,
        NbEvaIconsModule,
        NbThemeModule.forRoot({ name: 'default' }),
    ],
    declarations: [
        BotChatComponent,
    ],
    exports: [
        BotChatComponent,
    ], 
    providers: [
        { provide: NbFocusMonitor, useClass: FocusMonitor },
    ]
})
export class AssistantFeatureModule { }
