import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenegociacaoComponent } from './renegociacao/renegociacao.component';

const renegociarRoutes: Routes = [
  { path: '', component: RenegociacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(renegociarRoutes)],
  exports: [RouterModule]
})
export class RenegociacaoRoutingModule { }