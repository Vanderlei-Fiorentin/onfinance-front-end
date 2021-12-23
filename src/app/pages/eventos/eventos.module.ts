import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlteracaoEventoComponent } from './alteracao-evento/alteracao-evento.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { ListagemEventoComponent } from './listagem-evento/listagem-evento.component';
import { EventosRoutingModule } from './eventos-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    AlteracaoEventoComponent,
    CadastroEventoComponent,
    ListagemEventoComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    EventosRoutingModule,
    NgSelectModule,
    NgxPaginationModule
  ]
})
export class EventosModule { }
