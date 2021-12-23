import { Component, OnInit } from '@angular/core';
import { ContaCorrenteModel } from 'src/app/core/models/conta-corrente.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ContaService } from 'src/app/core/services/conta.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-listagem-conta',
  templateUrl: './listagem-conta.component.html',
  styleUrls: ['./listagem-conta.component.css']
})
export class ListagemContaComponent implements OnInit {

  contas: ContaCorrenteModel[] = [];
  contasListadas: ContaCorrenteModel[] = [];
  paginaAtual: number = 1;
  pesquisa: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private contaService: ContaService,
    private alertService: AlertService,
    private exception: ExceptionService) { }

  ngOnInit(): void {
    this.getContas();
  }

  getContas() {
    this.contaService.findAll().subscribe({
      next: (contas) => {
        this.paginaAtual = 1;
        this.contas = contas;
        this.contasListadas = contas;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os bancos!');
      }
    })
  }

  remove(id: number) {
    this.contaService.remove(id).subscribe({
      next: () => {
        this.alertService.success('Conta corrente removida com sucesso!', this.options);
        this.getContas();
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram removidos!');
      }
    });
  }

  filtrar(pesquisa: string) {
    this.contas = this.contasListadas.filter(c => c.usuario.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
  }

}
