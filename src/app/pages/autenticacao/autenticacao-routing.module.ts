import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoRecuperarSenhaComponent } from './info-recuperar-senha/info-recuperar-senha.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';

const usuariosRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },
  { path: 'info-recuperar-senha', component: InfoRecuperarSenhaComponent },
  { path: 'redefinir-senha', component: RedefinirSenhaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class AutenticacaoRoutingModule { }
