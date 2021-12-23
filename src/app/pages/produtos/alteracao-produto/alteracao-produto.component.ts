import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/core/models/categoria.model';
import { ProdutoModel } from 'src/app/core/models/produto.model';
import { UnidadeMedidaModel } from 'src/app/core/models/unidade-medida.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { ProdutoService } from 'src/app/core/services/produto.service';
import { UnidadeService } from 'src/app/core/services/unidade.service';

@Component({
  selector: 'app-alteracao-produto',
  templateUrl: './alteracao-produto.component.html',
  styleUrls: ['./alteracao-produto.component.css']
})
export class AlteracaoProdutoComponent implements OnInit {

  produto!: ProdutoModel;
  unidades: UnidadeMedidaModel[] = [];
  categorias: CategoriaModel[] = [];
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private produtoService: ProdutoService,
    private unidadeService: UnidadeService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.findById(params['id']);
    });
    this.findCategorias();
    this.findUnidades();
  }

  update() {
    this.produtoService.update(this.produto).subscribe({
      next: () => {
        this.alertService.success('Produto alterado com sucesso!', this.options);
        this.router.navigate(['produtos']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram alterados!');
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

  findById(id: number) {
    this.produtoService.findById(id).subscribe({
      next: (produto) => {
        this.produto = ProdutoModel.builder(produto);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao buscar o produto!');
      }
    });
  }

}
