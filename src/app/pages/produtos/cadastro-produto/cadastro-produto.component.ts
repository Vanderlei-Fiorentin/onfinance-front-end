import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from 'src/app/core/models/categoria.model';
import { ProdutoModel } from 'src/app/core/models/produto.model';
import { UnidadeMedidaModel } from 'src/app/core/models/unidade-medida.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { ProdutoService } from 'src/app/core/services/produto.service';
import { UnidadeService } from 'src/app/core/services/unidade.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: ProdutoModel;
  unidades: UnidadeMedidaModel[] = [];
  categorias: CategoriaModel[] = [];
  idProduto: number = 1;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private produtoService: ProdutoService,
    private unidadeService: UnidadeService,
    private categoriaService: CategoriaService,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) {
    this.produto = new ProdutoModel();
  }

  ngOnInit() {
    this.findCategorias();
    this.findUnidades();
  }

  save() {
    this.produtoService.save(this.produto).subscribe({
      next: () => {
        this.alertService.success('Produto inserido com sucesso!', this.options);
        this.router.navigate(['produtos']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram inseridos!');
      }
    });
  }

  findCategorias() {
    this.categoriaService.findAll().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as categorias!');
      }
    });
  }

  findUnidades() {
    this.unidadeService.findAll().subscribe({
      next: (unidades) => {
        this.unidades = unidades;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as unidades de medida!');
      }
    });
  }

}
