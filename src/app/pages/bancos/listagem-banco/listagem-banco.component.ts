import { Component, OnInit } from '@angular/core';
import { BancoModel } from 'src/app/core/models/banco.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { BancoService } from 'src/app/core/services/banco.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-listagem-banco',
  templateUrl: './listagem-banco.component.html',
  styleUrls: ['./listagem-banco.component.css']
})
export class ListagemBancoComponent implements OnInit {

  bancos: Array<BancoModel> = [];
  bancosListados: BancoModel[] = [];
  paginaAtual: number = 1;
  pesquisa: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private bancoService: BancoService, 
    private alertService: AlertService, 
    private exception: ExceptionService) { }

  ngOnInit() {
    this.findBancos();
  }

  findBancos() {
    this.bancoService.findAll().subscribe({
      next: (bancos) => {
        this.paginaAtual = 1;
        this.bancos = bancos;
        this.bancosListados = bancos;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os bancos!');
      }
    });
  }

  remove(id: number) {
    this.bancoService.remove(id).subscribe({
      next: () => {
        this.alertService.success('Banco removido com sucesso!', this.options);
        this.findBancos();
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram removidos!');
      }
    });
  }

  filtrar(pesquisa: string) {
    this.bancos = this.bancosListados.filter(b => b.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
    this.paginaAtual = 1;
  }

}
