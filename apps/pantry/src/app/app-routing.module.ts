import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnfoundPageComponent } from './pages/unfound-page/unfound-page.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./pages/home').then(m => m.HomeModule) },
    { path: '**', component: UnfoundPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }