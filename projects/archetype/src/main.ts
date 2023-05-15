/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { ROOT_REDUCERS } from './app/state/app.state';

const providers = [
  provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
  importProvidersFrom(
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'Testing' }),
  ),
];

bootstrapApplication(AppComponent, { providers }).catch((err) => console.error(err));
