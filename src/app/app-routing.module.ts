import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SiteComponent } from './pages/site/site.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./pages/usuarios/usuarios.module').then(mod => mod.UsuariosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'agencias',
        loadChildren: () => import('./pages/agencias/agencias.module').then(mod => mod.AgenciasModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'bancos',
        loadChildren: () => import('./pages/bancos/bancos.module').then(mod => mod.BancosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'contas',
        loadChildren: () => import('./pages/contas/contas.module').then(mod => mod.ContasModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'cartoes',
        loadChildren: () => import('./pages/cartoes/cartoes.module').then(mod => mod.CartoesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'bandeiras',
        loadChildren: () => import('./pages/bandeiras/bandeiras.module').then(mod => mod.BandeirasModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'empresas',
        loadChildren: () => import('./pages/empresas/empresas.module').then(mod => mod.EmpresasModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'produtos',
        loadChildren: () => import('./pages/produtos/produtos.module').then(mod => mod.ProdutosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'eventos',
        loadChildren: () => import('./pages/eventos/eventos.module').then(mod => mod.EventosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'categorias',
        loadChildren: () => import('./pages/categorias/categorias.module').then(mod => mod.CategoriasModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'unidades',
        loadChildren: () => import('./pages/unidades/unidades.module').then(mod => mod.UnidadesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'faturas',
        loadChildren: () => import('./pages/faturas/faturas.module').then(mod => mod.FaturasModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'lanctos',
        loadChildren: () => import('./pages/lancamentos/lancamentos.module').then(mod => mod.LancamentosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'pagamentos',
        loadChildren: () => import('./pages/pagamentos/pagamentos.module').then(mod => mod.PagamentosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'extratos',
        loadChildren: () => import('./pages/extratos/extratos.module').then(mod => mod.ExtratosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'vincular-parcelas',
        loadChildren: () => import('./pages/vincular-parcelas/vincular-parcelas.module').then(mod => mod.VincularParcelasModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'renegociar',
        loadChildren: () => import('./pages/renegociacoes/renegociacoes.module').then(mod => mod.RenegociacoesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'roles',
        loadChildren: () => import('./pages/roles/roles.module').then(mod => mod.RolesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'permissoes',
        loadChildren: () => import('./pages/permissoes/permissoes.module').then(mod => mod.PermissoesModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/autenticacao/autenticacao.module').then(mod => mod.AutenticacaoModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
