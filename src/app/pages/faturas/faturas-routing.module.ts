import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemFaturasComponent } from './listagem-faturas/listagem-faturas.component';

const faturasRoutes: Routes = [
  { path: '', component: ListagemFaturasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(faturasRoutes)],
  exports: [RouterModule]
})
export class FaturasRoutingModule { }