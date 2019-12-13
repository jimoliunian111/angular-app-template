import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fn } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
@Input() btnText:string = '搜索'
@Input() placeholder:string = '请输入'
@Input() searchFunc:any
@Input() parent:any
@Output() keyWord:any = new EventEmitter()

  keyword:string = ''

  constructor() { }

  ngOnInit() {

  }
  doSearch () {
    this.keyWord.emit('asadasas', this.keyword);
    // this.searchFunc(this.keyword);
    this.parent.searchFunc(this.keyword)
  }
}
