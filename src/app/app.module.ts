import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './router/app-routing.module';
import { LazyRoutingModule } from './router/lazy-routing.module';
import { AppComponent } from './pages/root-page/app.component';
import { TodoListModule } from './pages/todo-list/todo-list.module';
import { TestModule } from './pages/test-ngrx/text-module'

import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';
import { FooterComponent } from './components/footer/footer.component';

// service
import { StatusService } from './services/status.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyRoutingModule,
    TodoListModule,
    TestModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
