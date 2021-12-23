import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from 'src/app/core/models/categoria.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {

  categoria: CategoriaModel;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private alertService: AlertService, 
    private exception: ExceptionService) {
    this.categoria = new CategoriaModel();
  }

  ngOnInit() { }

  save() {
    this.categoriaService.save(this.categoria).subscribe({
      next: () => {
        this.alertService.success('Categoria inserida com sucesso!', this.options);
        this.router.navigate(['categorias']);
      }, error: (error) => {
        this.exception.alert(error, 'Os dados não foram inseridos!');
      }
    });
  }

}
