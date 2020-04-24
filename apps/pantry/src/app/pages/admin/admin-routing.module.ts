import { OutreachComponent } from './outreach/outreach.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PantryInfoComponent } from './pantry-info/pantry-info.component';
import { CommunicationsComponent } from './communications/communications.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'outreach', pathMatch: 'full' },
    { path: 'outreach', component: OutreachComponent },
    { path: 'manage', component: PantryInfoComponent },
    { path: 'communications', component: CommunicationsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }