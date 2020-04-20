import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserContextEffects } from './ngrx/effects';
import { userContextReducer } from './ngrx/reducer';
import { UserContextFacade } from './ngrx/facade';
import { ApiServicesModule } from '@cooper/api-services';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('user-context', userContextReducer),
        EffectsModule.forFeature([UserContextEffects]),
        ApiServicesModule,
        MatSnackBarModule
    ],
    providers: [
        UserContextFacade
    ]
})
export class StateUserContextModule { }
