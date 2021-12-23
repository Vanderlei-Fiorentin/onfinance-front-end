import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { InfoRecuperarSenhaComponent } from './info-recuperar-senha/info-recuperar-senha.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';



@NgModule({
  declarations: [
    LoginComponent,
    RecuperarSenhaComponent,
    InfoRecuperarSenhaComponent,
    RedefinirSenhaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AutenticacaoRoutingModule
  ]
})
export class AutenticacaoModule { }
