import { Injectable } from '@angular/core';

// import { setUserInfo } from '../reducers/modules/userInfo';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor() { }

  setFunc () {
    console.log('全局服务')
  }
}
