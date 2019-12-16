import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// 各模块 每个模块都要引入进来
import { setUserInfo } from '../reducers/modules/userInfo'; // 用户信息

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store) { 

  }

  setFunc (key: String, params: Object) {
    let obj = {
      setUserInfo: this.store.dispatch(setUserInfo({data: params}))
    }
    return obj[key];
  }
  getFunc (key: String) {
    return this.store.select(key);
  }

}
