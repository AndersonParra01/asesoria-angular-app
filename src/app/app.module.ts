import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { LayoutsModule } from './layouts/layouts.module';
import { HttpInterceptorProviders } from './interceptors';

//Components PrimeNg Global
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutsModule,
    ToastModule,
    MessagesModule
  ],
  providers: [MessageService, HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
