import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/core/models/categoria.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-alteracao-categoria',
  templateUrl: './alteracao-categoria.component.html',
  styleUrls: ['./alteracao-categoria.component.css']
})
export class AlteracaoCategoriaComponent implements OnInit {

  categoria!: CategoriaModel;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.findById(params['id']);
    });
  }

  update() {
    this.categoriaService.update(this.categoria).subscribe({
      next: () => {
        this.alertService.success('Categoria alterada com sucesso!', this.options);
        this.router.navigate(['categorias']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram inseridos!');
      }
    });
  }

  findById(id: number) {
    this.categoriaService.findById(id).subscribe({
      next: (categoria) => {
        this.categoria = CategoriaModel.builder(categoria);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao buscar a bandeira!');
      }
    });
  }

}
