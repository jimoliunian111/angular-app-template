// actions
import { createAction, props, State } from '@ngrx/store';

export const setUserInfo = createAction('setUserInfo',  props<{data: Object}>());

// reducer
import { createReducer, on } from '@ngrx/store';

//state
export const userInfo = {};
// export const userInfo = (state: State) => state.userInfo
 
const _userInfoReducer = createReducer(userInfo,
  on(setUserInfo, (state, obj:any) => {
    return {...state, ...obj.data}
  })
);
 
export function userInfoReducer(state, action) {
  return _userInfoReducer(state, action);
}