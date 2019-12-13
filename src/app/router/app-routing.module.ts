import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TodoListComponent } from '../pages/todo-list/todo-list/todo-list.component';
import routerIndex from './modules/index.ts'

const routes: Routes = [
  ...routerIndex
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
