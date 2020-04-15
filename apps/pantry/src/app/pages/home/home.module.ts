import { HomeComponent } from "./home.component";
import { NgModule } from '@angular/core';
import { AssistantFeatureModule } from '@cooper/assistant/feature';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        AssistantFeatureModule,
        RouterModule.forChild([{
            path: '',
            component: HomeComponent
        }]),
        MatInputModule,
        MatDividerModule,
        MatButtonModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        RouterModule,
    ]
})
export class HomeModule { }