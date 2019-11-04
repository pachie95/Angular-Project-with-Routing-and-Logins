import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { ArrowComponent } from './arrow/arrow.component'



@NgModule({
  declarations: [ArrowComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ArrowComponent
  ]
})
export class FunFactsModule { }
