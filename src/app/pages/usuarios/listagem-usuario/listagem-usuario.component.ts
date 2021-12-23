import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.css']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  usuariosListados: UsuarioModel[] = [];
  paginaAtual: number = 1;
  pesquisa: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private usuarioService: UsuarioService,
    private alertService: AlertService,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.findAll().subscribe({
      next: (usuarios) => {
        this.paginaAtual = 1;
        this.usuarios = usuarios;
        this.usuariosListados = usuarios;
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao carregar usuários!');
      }
    });
  }

  remove(id: number) {
    this.usuarioService.remove(id).subscribe({
      next: () => {
        this.alertService.success('Usuário removido com sucesso!', this.options);
        this.getUsuarios();
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram removidos!');
      }
    });
  }

  filtrar(pesquisa: string) {
    this.usuarios = this.usuariosListados.filter(u => u.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
    this.paginaAtual = 1;
  }

}
