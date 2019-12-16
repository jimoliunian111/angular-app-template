import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from './reducers/modules/counter';

import { setUserInfo } from './reducers/modules/userInfo';

@Component({
  selector: 'app-test-ngrx',
  templateUrl: './test-ngrx.component.html',
  styleUrls: ['./test-ngrx.component.scss']
})
export class TestNgrxComponent implements OnInit {

  count$: Observable<number>;
  userInfo$: Observable<Object>;
  constructor(private store: Store<{count: number, userInfo: Object}>) {
    this.count$ = store.pipe(select('count'));
    this.userInfo$ = store.pipe(select('userInfo'));
  }

  increment() {
    this.store.dispatch(increment());
  }
  setUserInfo () {
    let obj = {
      name: '张三',
      age: 25,
      sex: '男'
    }
    this.store.dispatch(setUserInfo({user: obj}))
  }

}
