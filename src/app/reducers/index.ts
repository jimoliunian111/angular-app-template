import { counterReducer } from './modules/counter';

import { userInfoReducer } from './modules/userInfo';

export const reducers = {
  count: counterReducer,
  userInfo: userInfoReducer
}
