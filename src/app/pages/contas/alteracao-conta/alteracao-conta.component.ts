import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionsUtil } from 'src/app/core/helpers/functions-util';
import { AgenciaModel } from 'src/app/core/models/agencia.model';
import { ContaCorrenteModel } from 'src/app/core/models/conta-corrente.model';
import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { AgenciaService } from 'src/app/core/services/agencia.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { ContaService } from 'src/app/core/services/conta.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-alteracao-conta',
  templateUrl: './alteracao-conta.component.html',
  styleUrls: ['./alteracao-conta.component.css']
})
export class AlteracaoContaComponent implements OnInit {

  conta!: ContaCorrenteModel;
  agencias: AgenciaModel[] = [];
  usuarios: UsuarioModel[] = [];
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private contaService: ContaService,
    private usuarioService: UsuarioService,
    private alertService: AlertService,
    private agenciaService: AgenciaService,
    private route: ActivatedRoute,
    private router: Router,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.findById(params['id']);
    });
    this.findAgencias();
    this.findUsuarios();
  }

  update() {
    this.contaService.update(this.conta).subscribe({
      next: () => {
        this.alertService.success('Conta corrente alterada com sucesso!', this.options);
        this.router.navigate(['contas']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram alterados!');
      }
    });
  }

  findAgencias() {
    this.agenciaService.findAll().subscribe({
      next: (agencias) => {
        this.agencias = agencias;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as agências!');
      }
    });
  }

  findUsuarios() {
    this.usuarioService.findAll().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os usuários!');
      }
    })
  }

  findById(id: number) {
    this.contaService.findById(id).subscribe({
      next: (conta) => {
        this.conta = ContaCorrenteModel.builder(conta);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao buscar a conta corrente!');
      }
    });
  }

  getAgencia(agencia: AgenciaModel) {
    return FunctionsUtil.getAgencia(agencia);
  }

}
