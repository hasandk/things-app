import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { thingsReducer } from './thingReducer';
import { Thing } from '../entities/thing';

export class ThingState {
  isThing: boolean;
  things: Thing[];
  isLoading: boolean;
}
export class AppState {
  things?: ThingState;
}
export const rootReducer = combineReducers<AppState>({
things: thingsReducer,
router: routerReducer
} as any) ;
