import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PantryComponent } from './pantry.component';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { UnfoundPageComponent } from '../unfound-page/unfound-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
        RouterModule.forChild([
            { path: '', component: UnfoundPageComponent },
            { path: ':id', component: PantryComponent }
        ])
    ],
    declarations: [
        PantryComponent
    ]
})
export class PantryModule { }