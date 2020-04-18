import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnfoundPageComponent } from './pages/unfound-page/unfound-page.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./pages/home').then(m => m.HomeModule) },
    { path: 'customer', loadChildren: () => import('./pages/customer/customer.module').then((m) => m.CustomerModule) },
    { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule) },
    { path: 'join', loadChildren: () => import('./pages/account-creation/account-creation.module').then((m) => m.AccountCreationModule) },
    { path: 'login', loadChildren: () => import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule) },
    { path: '**', component: UnfoundPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }