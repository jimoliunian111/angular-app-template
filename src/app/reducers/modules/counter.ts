// actions
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');

// reducer
import { createReducer, on } from '@ngrx/store';
 
export const initialState = 0;
 
const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1)
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}