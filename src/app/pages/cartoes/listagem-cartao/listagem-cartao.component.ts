import { Component, OnInit } from '@angular/core';
import { CartaoCreditoModel } from 'src/app/core/models/cartao-credito.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { CartaoService } from 'src/app/core/services/cartao.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-listagem-cartao',
  templateUrl: './listagem-cartao.component.html',
  styleUrls: ['./listagem-cartao.component.css']
})
export class ListagemCartaoComponent implements OnInit {

  cartoes: CartaoCreditoModel[] = [];
  cartoesListados: CartaoCreditoModel[] = [];
  paginaAtual: number = 1;
  pesquisa: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private cartaoService: CartaoService,
    private alertService: AlertService,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.getCartoes();
    this.paginaAtual = 1;
  }

  getCartoes() {
    this.cartaoService.findAll().subscribe({
      next: (cartoes) => {
        this.paginaAtual = 1;
        this.cartoes = cartoes;
        this.cartoesListados = cartoes;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os cartões de crédito!');
      }
    });
  }

  remove(id: number) {
    this.cartaoService.remove(id).subscribe({
      next: () => {
        this.alertService.success('Cartão de crédito removido com sucesso!', this.options);
        this.getCartoes();
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram removidos!');
      }
    });
  }

  filtrar(pesquisa: string) {
    this.cartoes = this.cartoesListados.filter(c => c.conta.usuario.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
  }

}
