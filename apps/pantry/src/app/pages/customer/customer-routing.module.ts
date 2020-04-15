import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BotComponent } from './bot/bot.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'bot', pathMatch: 'full' },
    { path: 'bot', component: BotComponent }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }