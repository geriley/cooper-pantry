import { HomeComponent } from "./home.component";
import { NgModule } from '@angular/core';
import { AssistantFeatureModule } from '@cooper/assistant/feature';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        AssistantFeatureModule,
        RouterModule.forChild([{
            path: '',
            component: HomeComponent
        }])
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        RouterModule,
    ]
})
export class HomeModule { }