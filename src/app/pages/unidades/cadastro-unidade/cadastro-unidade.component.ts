import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnidadeMedidaModel } from 'src/app/core/models/unidade-medida.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { UnidadeService } from 'src/app/core/services/unidade.service';

@Component({
  selector: 'app-cadastro-unidade',
  templateUrl: './cadastro-unidade.component.html',
  styleUrls: ['./cadastro-unidade.component.css']
})
export class CadastroUnidadeComponent implements OnInit {

  unidade: UnidadeMedidaModel;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private unidadeService: UnidadeService,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) {
    this.unidade = new UnidadeMedidaModel();
  }

  ngOnInit() { }

  save() {
    this.unidadeService.save(this.unidade).subscribe({
      next: () => {
        this.alertService.success('Unidade inserida com sucesso!', this.options);
        this.router.navigate(['unidades']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram inseridos!');
      }
    });
  }

}
