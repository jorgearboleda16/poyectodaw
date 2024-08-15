import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)),
    provideRouter(appRoutes),
  ]
}).catch(err => console.error(err));