// actions
import { createAction, props, State } from '@ngrx/store';

export const setUserInfo = createAction('setUserInfo',  props<{ user: any }>());

// reducer
import { createReducer, on } from '@ngrx/store';

//state
export const userInfo = {};
 
const _userInfoReducer = createReducer(userInfo,
  on(setUserInfo, (state, obj:any) => ({...state, ...obj.user}))
);
 
export function userInfoReducer(state, action) {
  return _userInfoReducer(state, action);
}