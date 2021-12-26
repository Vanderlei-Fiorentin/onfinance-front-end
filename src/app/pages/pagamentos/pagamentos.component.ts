import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionsUtil } from 'src/app/core/helpers/functions-util';
import { CartaoCreditoModel } from 'src/app/core/models/cartao-credito.model';
import { ContaCorrenteModel } from 'src/app/core/models/conta-corrente.model';
import { PagamentoModel } from 'src/app/core/models/pagamento.model';
import { ParcelamentoModel } from 'src/app/core/models/parcelamento.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { CartaoService } from 'src/app/core/services/cartao.service';
import { ContaService } from 'src/app/core/services/conta.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { PagamentoService } from 'src/app/core/services/pagamento.service';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {

  formulario!: FormGroup;
  pagamento!: PagamentoModel;
  parcelamento!: ParcelamentoModel;
  formaPagto!: String;
  documentos!: FileList;
  valorPago: number = 0;
  valorEmAberto: number = 0;
  valorPagamento: number = 0;
  faturaPaga: boolean = false;
  parcelarRestanteValor: boolean = false;
  contas: ContaCorrenteModel[] = [];
  cartoes: CartaoCreditoModel[] = [];
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private pagamentoService: PagamentoService,
    private contaService: ContaService,
    private cartaoService: CartaoService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.findFaturaById(params['id']);
    });
    this.findContas();
    this.findCartoes();    
  }

  ngOnInitForm() {
    this.formulario = this.formBuilder.group({
      cartao: [null],
      conta: [null],
      valor: [this.pagamento.getValorEmAberto(), Validators.required],
      juros: [0],
      multa: [0],
      desconto: [0],
      dataPagamento: [null, Validators.required],
      tipoPagamento: [null],
      parcelarValorRestante: [false],
      formaPagamento: [null, Validators.required],
      pagamentoMinimo: [false],
      parcelamento: this.formBuilder.group({
        parcelas: [1],
        vigencia: [0],
        juros: [0],
        multa: [0]
      })
    });
    this.onChangeValorPagamento();
  }

  getPagamento(): PagamentoModel {
    this.pagamento.valor = this.formulario.value.valor;
    this.pagamento.juros = this.formulario.value.juros;
    this.pagamento.multa = this.formulario.value.multa;
    this.pagamento.desconto = this.formulario.value.desconto;
    this.pagamento.cartao = this.formulario.value.cartao;
    this.pagamento.conta = this.formulario.value.conta;
    var valorPago = this.pagamento.valor + this.formulario.value.valor;
    this.pagamento.tipoPagamento = (this.formulario.value.pagamentoMinimo) ? 'M' : (this.pagamento.fatura.valor > valorPago) ? 'P' : 'T';
    this.pagamento.dataPagamento = this.formulario.value.dataPagamento;
    return this.pagamento;
  }

  getParcelamento(): ParcelamentoModel {
    return new ParcelamentoModel(
      this.formulario.value.parcelamento.parcelas,
      this.formulario.value.parcelamento.vigencia,
      this.formulario.value.parcelamento.juros,
      this.formulario.value.parcelamento.multa
    );
  }

  onSubmit() {

    var data = new FormData();

    if (this.documentos !== undefined) {
      for (let i = 0; i < this.documentos.length; i++) {
        data.append('files', this.documentos[i], this.documentos[i].name)
      }
    }

    data.append('pagamento', JSON.stringify(this.getPagamento()));
    data.append('parcelamento', JSON.stringify(this.getParcelamento()));

    this.pagamentoService.saveFormData(data).subscribe({
      next: () => {
        this.alertService.success('Pagamento realizado com sucesso!', this.options);
        this.router.navigate(['faturas']);
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível pagar a parcela!');
      }
    })
  }

  findFaturaById(id: number) {
    this.pagamentoService.findById(id).subscribe({
      next: (pagamento) => {
        this.pagamento = PagamentoModel.builder(pagamento);
        this.ngOnInitForm();
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar a fatura!');
      }
    });
  }

  findContas(): void {
    this.contaService.findAll().subscribe({
      next: (contas) => {
        this.contas = contas;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as contas correntes!');
      }
    });
  }

  findCartoes(): void {
    this.cartaoService.findAll().subscribe({
      next: (cartoes) => {
        this.cartoes = cartoes;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os cartões de crédito!');
      }
    });
  }

  onChangeValorPagamento() {
    this.valorEmAberto = (this.pagamento.getValorEmAberto() + this.formulario.value.multa + this.formulario.value.juros) - this.formulario.value.desconto;
    this.valorPagamento = (this.formulario.value.valor + this.formulario.value.multa + this.formulario.value.juros) - this.formulario.value.desconto;
  }

  onChange(event: any) {
    this.documentos = event.target.files;
    console.log(this.documentos);
  }

  getNomeConta(conta: ContaCorrenteModel) {
    return FunctionsUtil.getNomeConta(conta);
  }

  getNomeCartao(cartao: CartaoCreditoModel) {
    return FunctionsUtil.getNomeCartao(cartao);
  }

}
