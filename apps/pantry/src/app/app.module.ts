import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { baseApiUrlToken } from '@cooper/api-services';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { firebaseConfig } from './common/firebase-token';
import { environment } from '../environments/environment';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { StateUserContextModule } from '@cooper/state/user-context';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StateUserContextModule
  ],
  providers: [
    { provide: baseApiUrlToken, useValue: environment.apiUrl },
    { provide: firebaseConfig, useValue: environment.firebase },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() { }
}
