import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { TodoListModule } from './pages/todo-list/todo-list.module';
// import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';

import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
    FormsModule,
    StoreModule.forRoot(reducers)
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
