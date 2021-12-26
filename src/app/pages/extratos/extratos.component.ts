import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctionsUtil } from 'src/app/core/helpers/functions-util';
import { CartaoCreditoModel } from 'src/app/core/models/cartao-credito.model';
import { ContaCorrenteModel } from 'src/app/core/models/conta-corrente.model';
import { ExtratoModel } from 'src/app/core/models/extrato.model';
import { LanctoContabilModel } from 'src/app/core/models/lancto-contabil.model';
import { PagamentoModel } from 'src/app/core/models/pagamento.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ContaService } from 'src/app/core/services/conta.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { ExtratoService } from 'src/app/core/services/extrato.service';
import { LanctoContabilService } from 'src/app/core/services/lancto-contabil.service';

@Component({
  selector: 'app-extratos',
  templateUrl: './extratos.component.html',
  styleUrls: ['./extratos.component.css']
})
export class ExtratosComponent implements OnInit {

  formulario!: FormGroup;
  extratos: ExtratoModel[] = [];
  contas: ContaCorrenteModel[] = [];
  lancto!: LanctoContabilModel;
  paginaAtual: number = 1;
  pageParcelas: number = 1;
  showModal: boolean = false;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private lanctoService: LanctoContabilService,
    private contaService: ContaService,
    private extratoService: ExtratoService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.onInitForms();
    this.findContas();
    this.lancto = new LanctoContabilModel();
  }

  onInitForms() {
    this.formulario = this.formBuilder.group({
      conta: [null, Validators.required],
      operacao: ['T', Validators.required],
      periodoInicial: ['null', Validators.required],
      periodoFinal: ['null', Validators.required]
    });
  }

  filtrar() {
    if (this.formulario.value.conta.id > 0) {
      this.findExtratos();
    } else {
      this.alertService.warn("Favor selecionar uma conta!", this.options);
    }
  }

  findExtratos() {
    var params = {
      "conta": this.formulario.value.conta.id,
      "periodoInicial": this.formulario.value.periodoInicial,
      "periodoFinal": this.formulario.value.periodoFinal,
      "operacao": this.formulario.value.operacao
    };

    this.extratoService.findExtratos(params).subscribe({
      next: (extratos) => {
        this.paginaAtual = 1;
        this.extratos = extratos;
      },
      error: (error) => {
        this.exception.alert(error, "Não foi possível carregar o extrato bancário!");
      }
    });
  }

  findContas(): void {
    this.contaService.findAll().subscribe({
      next: (contas) => {
        this.contas = contas;
      },
      error: (error) => {
        this.exception.alert(error, "Não foi possível carregar as contas correntes!");
      }
    });
  }

  findLancto(id: number) {
    this.lanctoService.findByFatura(id).subscribe({
      next: (lancto) => {
        this.pageParcelas = 1;
        this.lancto = LanctoContabilModel.builder(lancto);
      },
      error: (error) => {
        this.exception.alert(error, "Não foi possível carregar o lançamento!");
      }
    })
  }

  getNomeConta(conta: ContaCorrenteModel) {
    return FunctionsUtil.getNomeConta(conta);
  }

  getNomeCartao(cartao: CartaoCreditoModel) {
    return FunctionsUtil.getNomeCartao(cartao);
  }

  getValorPagamento(extrato: ExtratoModel): number {
    return ExtratoModel.builder(extrato).getValorPagamento();
  }

}
