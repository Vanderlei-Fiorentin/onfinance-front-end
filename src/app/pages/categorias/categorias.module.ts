import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlteracaoCategoriaComponent } from './alteracao-categoria/alteracao-categoria.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { ListagemCategoriaComponent } from './listagem-categoria/listagem-categoria.component';
import { CategoriaRoutingModule } from './categorias-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    AlteracaoCategoriaComponent,
    CadastroCategoriaComponent,
    ListagemCategoriaComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriaRoutingModule,
    NgSelectModule,
    NgxPaginationModule
  ]
})
export class CategoriasModule { }
