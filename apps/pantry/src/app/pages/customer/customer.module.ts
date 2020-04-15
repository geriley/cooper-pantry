import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AssistantFeatureModule } from '@cooper/assistant/feature';
import { BotComponent } from './bot/bot.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
    imports: [CommonModule, AssistantFeatureModule, CustomerRoutingModule],
    declarations: [
        BotComponent
    ]
})
export class CustomerModule { }