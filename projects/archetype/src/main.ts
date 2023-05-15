/// <reference types="@angular/localize" />

import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';

const providers = [
  provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
  importProvidersFrom(IonicModule.forRoot()),
];

bootstrapApplication(AppComponent, { providers }).catch((err) => console.error(err));
