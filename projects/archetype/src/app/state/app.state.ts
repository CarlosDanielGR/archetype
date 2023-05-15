import { ActionReducerMap } from '@ngrx/store';
import { IRoute } from '@coreArchetype/interfaces/global.interface';
import { routeReducer } from './reducers/global.reducer';

interface IAppState extends IRoute {}

export const ROOT_REDUCERS: ActionReducerMap<IAppState> = {
  route: routeReducer,
};
