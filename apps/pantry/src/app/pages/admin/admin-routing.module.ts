import { OutreachComponent } from './outreach/outreach.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PantryInfoComponent } from './pantry-info/pantry-info.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'outreach', pathMatch: 'full' },
    { path: 'outreach', component: OutreachComponent },
    { path: 'manage', component: PantryInfoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }