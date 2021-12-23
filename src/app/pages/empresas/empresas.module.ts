import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlteracaoEmpresaComponent } from './alteracao-empresa/alteracao-empresa.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { ListagemEmpresaComponent } from './listagem-empresa/listagem-empresa.component';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlteracaoEmpresaComponent,
    CadastroEmpresaComponent,
    ListagemEmpresaComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmpresasRoutingModule,
    NgSelectModule,
    NgxPaginationModule
  ]
})
export class EmpresasModule { }
