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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  providers: [
    { provide: baseApiUrlToken, useValue: 'http://localhost:3333/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
