import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoCategoriaComponent } from './alteracao-categoria/alteracao-categoria.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { ListagemCategoriaComponent } from './listagem-categoria/listagem-categoria.component';

const categoriasRoutes: Routes = [
  { path: '', component: ListagemCategoriaComponent },
  { path: 'cadastro', component: CadastroCategoriaComponent },
  { path: ':id', component: AlteracaoCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(categoriasRoutes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }