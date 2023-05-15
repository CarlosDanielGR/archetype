/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';

const providers = [provideRouter(APP_ROUTES, withPreloading(PreloadAllModules))];

bootstrapApplication(AppComponent, { providers }).catch((err) => console.error(err));
