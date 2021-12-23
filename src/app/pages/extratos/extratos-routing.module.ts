import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratosComponent } from './extratos.component';

const extratosRoutes: Routes = [
  { path: '', component: ExtratosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(extratosRoutes)],
  exports: [RouterModule]
})
export class ExtratosRoutingModule { }