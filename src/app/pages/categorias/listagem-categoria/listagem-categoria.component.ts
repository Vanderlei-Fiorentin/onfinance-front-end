import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from 'src/app/core/models/categoria.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-listagem-categoria',
  templateUrl: './listagem-categoria.component.html',
  styleUrls: ['./listagem-categoria.component.css']
})
export class ListagemCategoriaComponent implements OnInit {

  categorias: CategoriaModel[] = [];
  categoriasListadas: CategoriaModel[] = [];
  paginaAtual: number = 1;
  pesquisa: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };


  constructor(
    private categoriaService: CategoriaService,
    private alertService: AlertService,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.findAll().subscribe({
      next: (categorias) => {
        this.paginaAtual = 1;
        this.categorias = categorias;
        this.categoriasListadas = categorias;
      },
      error: (error) => {
        this.exception.alert(error, "Não foi possível carregar as categorias!");
      }
    });
  }

  remove(id: number) {
    this.categoriaService.remove(id).subscribe({
      next: () => {
        this.alertService.success('Categoria removida com sucesso!', this.options);
        this.getCategorias();
      },
      error: (error) => {
        this.exception.alert(error, "Os dados não foram removidos!");
      }
    });
  }

  filtrar(pesquisa: string) {
    this.categorias = this.categoriasListadas.filter(c => c.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
  }

}
