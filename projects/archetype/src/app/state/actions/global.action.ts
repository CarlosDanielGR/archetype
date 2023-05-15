import { createAction, props } from '@ngrx/store';
import { IRoute } from '@coreArchetype/interfaces/global.interface';

export const newRoute = createAction('[Route] New Route', props<IRoute>());
