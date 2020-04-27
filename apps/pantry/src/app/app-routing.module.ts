import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnfoundPageComponent } from './pages/unfound-page/unfound-page.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./pages/home').then(m => m.HomeModule) },
    { path: 'customer', loadChildren: () => import('./pages/customer/customer.module').then((m) => m.CustomerModule) },
    { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule) },
    { path: 'account', loadChildren: () => import('./pages/account-management/account-management.module').then((m) => m.AccountManagementModule) },
    { path: 'pantry', loadChildren: () => import('./pages/pantry/pantry.module').then((m) => m.PantryModule) },
    { path: 'pantry-list', loadChildren: () => import('./pages/pantry-list/pantry-list.module').then(m => m.PantryListModule)},
    { path: 'login', loadChildren: () => import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule) },
    { path: '**', component: UnfoundPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }