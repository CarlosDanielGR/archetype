import { createSelector } from '@ngrx/store';
import { IRoute } from '@coreArchetype/interfaces/global.interface';

const routerName = (name: IRoute) => name.route;

export const selectRoute = createSelector(routerName, (route) => route);
