import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/core/models/produto.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { ProdutoService } from 'src/app/core/services/produto.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent implements OnInit {

  produtos: ProdutoModel[] = [];
  produtosListados: ProdutoModel[] = [];
  paginaAtual: number = 1;
  pesquisa: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private produtoService: ProdutoService,
    private alertService: AlertService,
    private exception: ExceptionService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.findAll().subscribe({
      next: (produtos) => {
        this.paginaAtual = 1;
        this.produtos = produtos;
        this.produtosListados = produtos;
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao carregar os produtos!');
      }
    });
  }

  remove(id: number) {
    this.produtoService.remove(id).subscribe({
      next: () => {
        this.alertService.success('Produto removido com sucesso!', this.options);
        this.getProdutos();
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao remover o produto!');
      }
    });
  }

  filtrar(pesquisa: string) {
    this.produtos = this.produtosListados.filter(p => p.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
  }

}
