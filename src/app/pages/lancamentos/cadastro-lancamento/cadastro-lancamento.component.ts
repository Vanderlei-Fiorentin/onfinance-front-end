import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventoCollection } from 'src/app/core/collections/eventos.collection';
import { ParcelaCollection } from 'src/app/core/collections/parcelas.collection';
import { ProdutoCollection } from 'src/app/core/collections/produtos.collection';
import { FunctionsUtil } from 'src/app/core/helpers/functions-util';
import { CartaoCreditoModel } from 'src/app/core/models/cartao-credito.model';
import { ContaCorrenteModel } from 'src/app/core/models/conta-corrente.model';
import { EmpresaModel } from 'src/app/core/models/empresa.model';
import { EventoLanctoEntradaModel } from 'src/app/core/models/evento-lancto-entrada.model';
import { EventoModel } from 'src/app/core/models/evento.model';
import { LanctoContabilGeral } from 'src/app/core/models/lancto-contabil-geral.model';
import { LanctoContabilModel } from 'src/app/core/models/lancto-contabil.model';
import { ParcelaLanctoContabilModel } from 'src/app/core/models/parcela-lancto-contabil.model';
import { PerfilUsuarioModel } from 'src/app/core/models/perfil-usuario.model';
import { ProdutoLanctoSaidaModel } from 'src/app/core/models/produto-lancto-saida.model';
import { ProdutoModel } from 'src/app/core/models/produto.model';
import { SaidaLanctoEntradaModel } from 'src/app/core/models/saida-lancto-entrada.model';
import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { CartaoService } from 'src/app/core/services/cartao.service';
import { ContaService } from 'src/app/core/services/conta.service';
import { EmpresaService } from 'src/app/core/services/empresa.service';
import { EventoLanctoEntradaService } from 'src/app/core/services/evento-lancto-entrada.service';
import { EventoService } from 'src/app/core/services/evento.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { LanctoContabilService } from 'src/app/core/services/lancto-contabil.service';
import { ParcelaLanctoContabilService } from 'src/app/core/services/parcela-lancto-contabil.service';
import { ProdutoLanctoSaidaService } from 'src/app/core/services/produto-lancto-saida.service';
import { ProdutoService } from 'src/app/core/services/produto.service';
import { SaidaLanctoEntradaService } from 'src/app/core/services/saida-lancto-entrada.service';

@Component({
  selector: 'app-cadastro-lancamento',
  templateUrl: './cadastro-lancamento.component.html',
  styleUrls: ['./cadastro-lancamento.component.css']
})
export class CadastroLancamentoComponent implements OnInit {

  formEventos!: FormGroup;
  formProdutos!: FormGroup;
  formLanctoSaida!: FormGroup;

  formaPagto: string = 'D';
  lancamento!: LanctoContabilModel;

  eventosAdicionados: EventoCollection;
  produtosAdicionados: ProdutoCollection;
  parcelasAdicionadas: ParcelaCollection;

  parcelas: ParcelaLanctoContabilModel[] = [];
  cartoes: CartaoCreditoModel[] = [];
  saidas: LanctoContabilModel[] = [];
  contas: ContaCorrenteModel[] = [];
  empresas: EmpresaModel[] = [];
  produtos: ProdutoModel[] = [];
  eventos: EventoModel[] = [];

  page: number = 1;
  documentos!: FileList;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private lanctoContabilService: LanctoContabilService,
    private eventoService: EventoService,
    private contaService: ContaService,
    private cartaoService: CartaoService,
    private empresaService: EmpresaService,
    private produtoService: ProdutoService,
    private parcelaLanctoContabilService: ParcelaLanctoContabilService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private eventoLanctoEntradaService: EventoLanctoEntradaService,
    private produtoLanctoSaidaService: ProdutoLanctoSaidaService,
    private saidaLanctoEntradaService: SaidaLanctoEntradaService,
    private exception: ExceptionService) {
    this.lancamento = new LanctoContabilModel();
    this.onInitForms();
    this.eventosAdicionados = new EventoCollection(this.alertService);
    this.produtosAdicionados = new ProdutoCollection(this.alertService);
    this.parcelasAdicionadas = new ParcelaCollection(this.alertService);
  }

  ngOnInit() {
    this.findEmpresas();
    this.findContas();
    this.findCartoes();
    this.findEventos();
    this.findProdutos();
    this.findLanctosSaidasAberto();
  }

  onInit() {
    this.lancamento = new LanctoContabilModel();
    this.parcelasAdicionadas.reset();
    this.eventosAdicionados.reset();
    this.produtosAdicionados.reset();
    this.onInitForms();
    this.page = 1;
  }

  onInitForms() {
    this.formProdutos = this.formBuilder.group({
      produto: [null, Validators.required],
      quantidade: [null, Validators.required],
      valor: [null, Validators.required]
    });

    this.formEventos = this.formBuilder.group({
      evento: ['', Validators.required],
      quantidade: [null, Validators.required],
      valor: [null, Validators.required]
    });

    this.formLanctoSaida = this.formBuilder.group({
      lanctoSaida: [null, Validators.required],
      parcelaLanctoSaida: [null, Validators.required]
    });
  }

  getLanctoContabilGeral(): LanctoContabilGeral {
    this.lancamento.usuario = this.getUsuarioLogado().usuario;
    return new LanctoContabilGeral(
      this.lancamento,
      this.eventosAdicionados.all(),
      this.produtosAdicionados.all(),
      this.parcelasAdicionadas.all()
    );
  }

  save() {

    if (this.isValidLancto() === false) {
      this.alertService.warn('Soma dos eventos/produtos/saídas difere do valor do lançamento!', this.options);
      return;
    }

    var formulario = new FormData;

    if (this.documentos !== undefined) {
      for (let i = 0; i < this.documentos.length; i++) {
        formulario.append('files', this.documentos[i], this.documentos[i].name)
      }
    }

    formulario.append('lancto', JSON.stringify(this.getLanctoContabilGeral()));

    this.lanctoContabilService.saveLanctoContabilGeral(formulario).subscribe({
      next: (lancto) => {
        this.alertService.success('Dados inseridos com sucesso!', this.options);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao inserir o lançamento!');
      }
    });

    this.onInit();

  }

  addEventos() {
    this.eventosAdicionados.push(
      new EventoLanctoEntradaModel(
        this.formEventos.value.valor,
        this.formEventos.value.quantidade,
        new LanctoContabilModel(),
        this.formEventos.value.evento
      )
    );
    this.formEventos.reset();
  }

  addProduto() {
    this.produtosAdicionados.push(
      new ProdutoLanctoSaidaModel(
        this.formProdutos.value.valor,
        this.formProdutos.value.quantidade,
        new LanctoContabilModel(),
        this.formProdutos.value.produto
      )
    );
    this.formProdutos.reset();
  };

  addParcela() {
    this.parcelasAdicionadas.push(
      new SaidaLanctoEntradaModel(
        new LanctoContabilModel(),
        this.formLanctoSaida.value.parcelaLanctoSaida
      )
    );
    this.formLanctoSaida.reset();
  };

  isValidLancto(): boolean {

    var valorLancto: number = this.lancamento.getValorlancto();

    if (this.lancamento.tipoPagto == 'T' && this.produtosAdicionados.all().length > 0 && this.eventosAdicionados.all().length > 0) {
      return (valorLancto === this.produtosAdicionados.getSoma()) && (valorLancto === this.eventosAdicionados.getSoma());
    }

    if (this.produtosAdicionados.all().length > 0) {
      return valorLancto === parseFloat(this.produtosAdicionados.getSoma().toFixed(2));
    }

    if (this.eventosAdicionados.all().length > 0 && this.parcelasAdicionadas.all().length > 0) {
      var total: number = this.eventosAdicionados.getSoma() - this.parcelasAdicionadas.getSoma();
      return valorLancto === parseFloat(total.toFixed(2));
    }

    if (this.eventosAdicionados.all().length > 0) {
      return valorLancto === parseFloat(this.eventosAdicionados.getSoma().toFixed(2));
    }

    if (this.parcelasAdicionadas.all().length > 0) {
      return valorLancto === parseFloat(this.parcelasAdicionadas.getSoma().toFixed(2));
    }

    return true;
  };

  findEventosLanctoEntradaById(id: number) {
    this.eventoLanctoEntradaService.findByIdLancto(id).subscribe({
      next: (eventos) => {
        this.eventosAdicionados.pushAll(eventos);
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar o lançamento!');
      }
    });
  }

  findProdutosLanctoSaidaById(id: number) {
    this.produtoLanctoSaidaService.findByIdLancto(id).subscribe({
      next: (produtos) => {
        this.produtosAdicionados.pushAll(produtos);
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar o lançamento!');
      }
    });
  }

  findSaidasLanctoEntradaById(id: number) {
    this.saidaLanctoEntradaService.findByIdLancto(id).subscribe({
      next: (parcelas) => {
        this.parcelasAdicionadas.pushAll(parcelas);
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar a parcela de saída!');
      }
    });
  }

  findParcelasByLancto() {
    this.parcelaLanctoContabilService.findParcelasByLancto(this.formLanctoSaida.value.lanctoSaida.id).subscribe({
      next: (parcelas) => {
        this.parcelas = parcelas;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as parcelas!');
      }
    });
  }

  findLanctosSaidasAberto() {
    this.lanctoContabilService.findLanctosSaidasAberto('saidas', 'abertas').subscribe({
      next: (saidas) => {
        this.saidas = saidas;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os lançamentos de saída em aberto!');
      }
    });
  }

  findByTipoLancto(): void {
    if (this.lancamento.tipoLancto === 'E') {
      this.findEventos();
    } else if (this.lancamento.tipoLancto === 'S') {
      this.findProdutos();
    }
  }

  findEmpresas(): void {
    this.empresaService.findAll().subscribe({
      next: (empresas) => {
        this.empresas = empresas;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as empresas!');
      }
    });
  }

  findContas(): void {
    this.contaService.findByFiltro(true).subscribe({
      next: (contas) => {
        this.contas = contas;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as contas correntes!');
      }
    });
  }

  findCartoes(): void {
    this.cartaoService.findByFiltro(true).subscribe({
      next: (cartoes) => {
        this.cartoes = cartoes;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os cartões de crédito!');
      }
    });
  }

  findProdutos(): void {
    this.produtoService.findAll().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os produtos!');
      }
    });
  }

  findEventos(): void {
    this.eventoService.findAll().subscribe({
      next: (eventos) => {
        this.eventos = eventos;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os eventos!');
      }
    });
  }

  setPagination(index: number) {
    if (this.lancamento.tipoLancto == 'E' && this.page == 1) {
      this.page = this.page + 1;
    } else if (this.lancamento.tipoLancto == 'E' && this.page == 3 && index < 0) {
      this.page = this.page - 1;
    } else if (this.lancamento.tipoLancto == 'S' && this.lancamento.tipoPagto !== 'T' && this.page == 2 && index > 0) {
      this.page = this.page + 2;
    } else if (this.lancamento.tipoLancto == 'S' && this.lancamento.tipoPagto !== 'T' && this.page == 5 && index < 0) {
      this.page = this.page - 2;
    } else if (this.lancamento.tipoLancto == 'S' && this.lancamento.tipoPagto == 'T' && this.page == 3 && index > 0) {
      this.page = this.page + 1;
    } else if (this.lancamento.tipoLancto == 'S' && this.lancamento.tipoPagto == 'T' && this.page == 5 && index < 0) {
      this.page = this.page - 1;
    }
    this.page = this.page + (index);
  }

  getUsuarioLogado(): PerfilUsuarioModel {
    return JSON.parse(window.localStorage.getItem('perfil') ?? '');
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
