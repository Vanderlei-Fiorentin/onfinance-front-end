import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VincularParcelasComponent } from './vincular-parcelas.component';

const usuariosRoutes: Routes = [
  { path: '', component: VincularParcelasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class VincularParcelasRoutingModule { }
