import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadeMedidaModel } from 'src/app/core/models/unidade-medida.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { UnidadeService } from 'src/app/core/services/unidade.service';

@Component({
  selector: 'app-alteracao-unidade',
  templateUrl: './alteracao-unidade.component.html',
  styleUrls: ['./alteracao-unidade.component.css']
})
export class AlteracaoUnidadeComponent implements OnInit {

  unidade!: UnidadeMedidaModel;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private unidadeService: UnidadeService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.findById(params['id']);
    });
  }

  update() {
    this.unidadeService.update(this.unidade).subscribe({
      next: () => {
        this.alertService.success('Unidade alterada com sucesso!', this.options);
        this.router.navigate(['unidades']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram alterados!');
      }
    });
  }

  findById(id: number) {
    this.unidadeService.findById(id).subscribe({
      next: (unidade) => {
        this.unidade = UnidadeMedidaModel.builder(unidade);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao buscar a unidade!');
      }
    });
  }

}
