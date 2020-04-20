import { NgModule } from "@angular/core";
import { OutreachComponent } from './outreach/outreach.component';
import { CommonModule } from '@angular/common';
import { StatisticsRiskModule } from '@cooper/statistics/risk';
import { AdminRoutingModule } from './admin-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        StatisticsRiskModule,
        MatCardModule,
    ],
    declarations: [
        OutreachComponent
    ],
})
export class AdminModule { }