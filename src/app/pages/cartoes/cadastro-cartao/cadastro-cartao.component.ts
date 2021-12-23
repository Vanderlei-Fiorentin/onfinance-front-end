import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionsUtil } from 'src/app/core/helpers/functions-util';
import { BandeiraModel } from 'src/app/core/models/bandeira.model';
import { CartaoCreditoModel } from 'src/app/core/models/cartao-credito.model';
import { ContaCorrenteModel } from 'src/app/core/models/conta-corrente.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { BandeiraService } from 'src/app/core/services/bandeira.service';
import { CartaoService } from 'src/app/core/services/cartao.service';
import { ContaService } from 'src/app/core/services/conta.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-cadastro-cartao',
  templateUrl: './cadastro-cartao.component.html',
  styleUrls: ['./cadastro-cartao.component.css']
})
export class CadastroCartaoComponent implements OnInit {

  constructor(
    private cartaoService: CartaoService,
    private contaService: ContaService,
    private bandeiraService: BandeiraService,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) {
    this.cartao = new CartaoCreditoModel();
  }

  cartao: CartaoCreditoModel;
  contas: ContaCorrenteModel[] = [];
  bandeiras: BandeiraModel[] = [];
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  ngOnInit() {
    this.findContas();
    this.findBandeiras();
  }

  save() {
    this.cartaoService.save(this.cartao).subscribe({
      next: () => {
        this.alertService.success('Cartão de crédito inserido com sucesso!', this.options);
        this.router.navigate(['cartoes']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram inseridos!');
      }
    });
  }

  findContas() {
    this.contaService.findAll().subscribe({
      next: (contas) => {
        this.contas = contas;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as contas correntes!');
      }
    });
  }

  findBandeiras() {
    this.bandeiraService.findAll().subscribe({
      next: (bandeiras) => {
        this.bandeiras = bandeiras;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as bandeiras!');
      }
    });
  }

  getNomeConta(conta: ContaCorrenteModel) {
    return FunctionsUtil.getNomeConta(conta);
  }

}
