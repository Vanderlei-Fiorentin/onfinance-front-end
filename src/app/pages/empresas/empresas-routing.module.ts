import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoEmpresaComponent } from './alteracao-empresa/alteracao-empresa.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { ListagemEmpresaComponent } from './listagem-empresa/listagem-empresa.component';

const empresasRoutes: Routes = [
  { path: '', component: ListagemEmpresaComponent },
  { path: 'cadastro', component: CadastroEmpresaComponent },
  { path: ':id', component: AlteracaoEmpresaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(empresasRoutes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }