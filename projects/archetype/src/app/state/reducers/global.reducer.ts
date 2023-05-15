import { createReducer, on } from '@ngrx/store';
import { newRoute } from '@stateArchetype/actions/global.action';

export const routeReducer = createReducer(
  '/',
  on(newRoute, (currentRoute, next) => next.route),
);
