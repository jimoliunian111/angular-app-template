// import {
//   ActionReducer,
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   MetaReducer
// } from '@ngrx/store';
// import { environment } from '../../environments/environment';


// export interface State {
 
// }

// export const reducers: ActionReducerMap<State> = {
  
// };


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

import { counterReducer } from './modules/counter';

import { userInfoReducer } from './modules/userInfo';

export const reducers = {
  count: counterReducer,
  userInfo: userInfoReducer
}
