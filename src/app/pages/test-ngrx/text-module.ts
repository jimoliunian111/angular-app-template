import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestNgrxComponent } from './test-ngrx.component';



@NgModule({
  declarations: [TestNgrxComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TestModule { }