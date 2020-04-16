import { OutreachComponent } from './outreach/outreach.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', redirectTo: 'outreach', pathMatch: 'full' },
    { path: 'outreach', component: OutreachComponent }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }