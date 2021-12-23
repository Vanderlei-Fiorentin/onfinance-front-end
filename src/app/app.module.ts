import { NgModule } from '@angular/core';
import {APP_BASE_HREF, CommonModule, CurrencyPipe, DatePipe} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './pages/site/site.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { AuthService } from './core/services/auth.service';
import { LoginService } from './core/services/login.service';
import { PathUrl } from './core/helpers/path-url';
import { httpInterceptorProviders } from './core/interceptors';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { AuthenticationComponent } from './pages/autenticacao/authentication/authentication.component';
import { AutenticacaoModule } from './pages/autenticacao/autenticacao.module';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AgenciasModule } from './pages/agencias/agencias.module';
import { BancosModule } from './pages/bancos/bancos.module';
import { HomeModule } from './pages/home/home.module';
import { BandeirasModule } from './pages/bandeiras/bandeiras.module';
import { CartoesModule } from './pages/cartoes/cartoes.module';
import { ContasModule } from './pages/contas/contas.module';
import { EmpresasModule } from './pages/empresas/empresas.module';
import { CategoriasModule } from './pages/categorias/categorias.module';
import { EventosModule } from './pages/eventos/eventos.module';
import { UnidadesModule } from './pages/unidades/unidades.module';
import { FaturasModule } from './pages/faturas/faturas.module';
import { PagamentosModule } from './pages/pagamentos/pagamentos.module';
import { ExtratosModule } from './pages/extratos/extratos.module';
import { VincularParcelasModule } from './pages/vincular-parcelas/vincular-parcelas.module';
import { LancamentosModule } from './pages/lancamentos/lancamentos.module';
import { RenegociacoesModule } from './pages/renegociacoes/renegociacoes.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PermissoesModule } from './pages/permissoes/permissoes.module';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    SidebarComponent,
    AlertComponent,
    AuthenticationComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgSelectModule,
    UsuariosModule,
    AutenticacaoModule,
    AgenciasModule,
    BancosModule,
    BandeirasModule,
    CartoesModule,
    ContasModule,
    EmpresasModule,
    CategoriasModule,
    EventosModule,
    HomeModule,
    UnidadesModule,
    FaturasModule,
    LancamentosModule,
    PagamentosModule,
    ExtratosModule,
    VincularParcelasModule,
    RenegociacoesModule,
    PermissoesModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' },
    AuthService, 
    LoginService,
    PathUrl,
    CurrencyPipe,
    DatePipe,
    AuthGuard,
    httpInterceptorProviders,
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
