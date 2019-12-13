import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SearchComponent } from '../../components/search/search.component';



@NgModule({
  declarations: [TodoListComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TodoListModule { }
