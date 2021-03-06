import { NgModule } from "@angular/core";
import { OutreachComponent } from './outreach/outreach.component';
import { CommonModule } from '@angular/common';
import { StatisticsRiskModule } from '@cooper/statistics/risk';
import { AdminRoutingModule } from './admin-routing.module';
import { MatCardModule } from '@angular/material/card';
import { PantryInfoComponent } from './pantry-info/pantry-info.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiServicesModule } from '@cooper/api-services';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { CommunicationsComponent } from './communications/communications.component';
import { MatStepperModule } from '@angular/material/stepper';
import {TextFieldModule} from '@angular/cdk/text-field';
import { ManageInventoryComponent } from './inventory/add/add-inventory.component';
import { AdminInventoryModule } from '@cooper/admin/inventory';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        StatisticsRiskModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        ApiServicesModule,
        MatSnackBarModule,
        MatSelectModule,
        MatStepperModule,
        TextFieldModule,
        ApiServicesModule,
        AdminInventoryModule,
        MatSnackBarModule
    ],
    declarations: [
        OutreachComponent,
        PantryInfoComponent,
        CommunicationsComponent,
        ManageInventoryComponent
    ],
})
export class AdminModule { }