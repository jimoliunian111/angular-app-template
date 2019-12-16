import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-test-ngrx',
  templateUrl: './test-ngrx.component.html',
  styleUrls: ['./test-ngrx.component.scss']
})
export class TestNgrxComponent implements OnInit {

  userInfo$: Observable<Object>;
  constructor(
    private store: Store,
    private $store: StoreService) {
  }

  increment() {
    this.$store.setFunc('setUserInfo', {
      name: '李四',
      age: 25,
      sex: '男'
    })
    this.userInfo$ = this.$store.getFunc('userInfo')
    console.log('6666', this.$store.getFunc('userInfo'))
  }

  setUserInfo () {
    this.$store.setFunc('setUserInfo', {
      name: '王五',
      age: 25,
      sex: '男'
    })
    this.userInfo$ = this.$store.getFunc('userInfo')
  }
  ngOnInit () {
    console.log('ng组件已经加载')
  }

}
