import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { PantryListComponent } from './pantry-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        RouterModule.forChild([
            { 
                path: '',
                component: PantryListComponent,
            }
        ]),
    ],
    declarations: [
        PantryListComponent
    ]
})
export class PantryListModule { }