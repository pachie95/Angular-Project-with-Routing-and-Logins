import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrowComponent } from './fun-facts/arrow/arrow.component'


const routes: Routes = [
  {
    path: 'arrow', component: ArrowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
