import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  notlist:any[] = []
  list:any[] = []

  constructor() { }

  ngOnInit() {
  }
  searchFunc (val: any) {
    // return val
    console.log('我是todolist的方法', val)
    let obj = {
      checked: false,
      title: val,
      time: new Date()
    }
    this.notlist.push(obj)
  }
  getData (str: string, val: any) {
    console.log('99999999', str, val)
    return
    let obj = {
      checked: false,
      title: val,
      time: new Date()
    }
    this.notlist.push(obj)
  }
  checked (item: { checked: boolean; }, idx: number) {
    console.log('item', item.checked)
    item.checked = true
    if (item.checked) {
      this.list.push(item)
      this.notlist.splice(idx, 1)
    }
  }
  check (item: { checked: boolean; }, idx: number) {
    item.checked = false
    if (!item.checked) {
      this.notlist.push(item)
      this.list.splice(idx, 1)
    }
  }

}
