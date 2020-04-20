import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        RouterModule.forChild([
            { path: 'contact-info', component: ContactInfoComponent }
        ])
    ],
    declarations: [
        ContactInfoComponent,
    ]
})
export class AccountManagementModule { }