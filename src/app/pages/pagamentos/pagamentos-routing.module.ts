import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagamentosComponent } from './pagamentos.component';

const pagamentosRoutes: Routes = [
  { path: ':id', component: PagamentosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(pagamentosRoutes)],
  exports: [RouterModule]
})
export class PagamentosRoutingModule { }