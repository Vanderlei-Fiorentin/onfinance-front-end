import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenciaModel } from 'src/app/core/models/agencia.model';
import { BancoModel } from 'src/app/core/models/banco.model';
import { AgenciaService } from 'src/app/core/services/agencia.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { BancoService } from 'src/app/core/services/banco.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-alteracao-agencia',
  templateUrl: './alteracao-agencia.component.html',
  styleUrls: ['./alteracao-agencia.component.css']
})
export class AlteracaoAgenciaComponent implements OnInit {

  agencia!: AgenciaModel;
  bancos: BancoModel[] = [];
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private agenciaService: AgenciaService,
    private bancoService: BancoService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.findById(params['id']);
    });
    this.findBancos();
  }

  findById(id: number) {
    this.agenciaService.findById(id).subscribe({
      next: (agencia) => {
        this.agencia = AgenciaModel.builder(agencia);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao buscar a agência!');
      }
    });
  }

  update() {
    this.agenciaService.update(this.agencia).subscribe({
      next: () => {
        this.alertService.success('Agência alterada com sucesso!', this.options);
        this.router.navigate(['agencias']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram alterados!');
      }
    });
  }

  findBancos() {
    this.bancoService.findAll().subscribe({
      next: (bancos) => {
        this.bancos = bancos;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os bancos!');
      }
    });
  }

}
