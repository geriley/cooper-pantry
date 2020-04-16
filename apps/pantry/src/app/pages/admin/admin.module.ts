import { NgModule } from "@angular/core";
import { OutreachComponent } from './outreach/outreach.component';
import { CommonModule } from '@angular/common';
import { StatisticsRiskModule } from '@cooper/statistics/risk';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        StatisticsRiskModule
    ],
    declarations: [
        OutreachComponent
    ],
})
export class AdminModule { }