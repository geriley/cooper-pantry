import { AccountCreationComponent } from './account-creation.component';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
    { path: '', component: AccountCreationComponent }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatTabsModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [AccountCreationComponent],
})
export class AccountCreationModule { }