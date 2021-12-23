import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgenciaModel } from 'src/app/core/models/agencia.model';
import { BancoModel } from 'src/app/core/models/banco.model';
import { AgenciaService } from 'src/app/core/services/agencia.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { BancoService } from 'src/app/core/services/banco.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-cadastro-agencia',
  templateUrl: './cadastro-agencia.component.html',
  styleUrls: ['./cadastro-agencia.component.css']
})
export class CadastroAgenciaComponent implements OnInit {

  agencia: AgenciaModel;
  bancos: BancoModel[] = [];
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private agenciaService: AgenciaService,
    private bancoService: BancoService,
    private router: Router,
    private alertService: AlertService,
    private exception: ExceptionService) {
    this.agencia = new AgenciaModel();
  }

  ngOnInit() {
    this.findBancos();
  }

  save() {
    this.agenciaService.save(this.agencia).subscribe({
      next: () => {
        this.alertService.success('Agência cadastrada com sucesso!', this.options);
        this.router.navigate(['agencias']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram inseridos!');
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
