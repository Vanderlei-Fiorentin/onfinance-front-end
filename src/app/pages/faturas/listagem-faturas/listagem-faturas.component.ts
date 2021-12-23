import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PathUrl } from 'src/app/core/helpers/path-url';
import { EmpresaModel } from 'src/app/core/models/empresa.model';
import { PagamentoModel } from 'src/app/core/models/pagamento.model';
import { ParcelaLanctoContabilModel } from 'src/app/core/models/parcela-lancto-contabil.model';
import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { EmpresaService } from 'src/app/core/services/empresa.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { ParcelaLanctoContabilService } from 'src/app/core/services/parcela-lancto-contabil.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-listagem-faturas',
  templateUrl: './listagem-faturas.component.html',
  styleUrls: ['./listagem-faturas.component.css']
})
export class ListagemFaturasComponent implements OnInit {

  faturas: PagamentoModel[] = [];
  empresas: EmpresaModel[] = [];
  usuarios: UsuarioModel[] = [];
  parcelas: ParcelaLanctoContabilModel[] = [];
  empresa!: EmpresaModel;
  periodoInicial: string = 'null';
  periodoFinal: string = 'null';
  situacao: string = 'TD';
  tipoLancto: string = 'TD';
  tipoPagto: string = 'TD';
  usuario!: UsuarioModel;
  now = new Date();
  valorTotal: number = 0;
  pageFaturas: number = 1;
  pageParcelas: number = 1;
  valores: number = 0;
  showModal: boolean = false;
  faturasSelecionadas: PagamentoModel[] = [];
  tiposPagamentos = [
    { index: 'TD', value: 'Todos' },
    { index: 'A', value: 'À vista' },
    { index: 'F', value: 'Fixo' },
    { index: 'P', value: 'Parcelado' },
    { index: 'T', value: 'Transferência' }
  ];
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private http: HttpClient,
    private url: PathUrl,
    private parcelaLanctoContabil: ParcelaLanctoContabilService,
    private usuarioService: UsuarioService,
    private empresaService: EmpresaService,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.findEmpresas();
    this.findUsuarios();
  }

  filtrar() {
    this.findFaturas();
    this.valores = 0;
  }

  findFaturas() {
    this.http.get<PagamentoModel[]>(this.url.FATURAS_BY_FILTRO, {
      params: {
        "empresa": this.empresa ? this.empresa.id.toString() : '0',
        "periodoInicial": this.periodoInicial,
        "periodoFinal": this.periodoFinal,
        "situacao": this.situacao,
        "tipoLancto": this.tipoLancto,
        "tipoPagto": this.tipoPagto.toString(),
        "usuario": this.usuario ? this.usuario.id.toString() : '0'
      }
    }).subscribe({
      next: (faturas) => {
        this.pageFaturas = 1;
        this.faturas = faturas;
        this.totalizador();
      },
      error: (error) => {
        this.exception.alert(error, "Não foi possível carregar as faturas!");
      }
    });
  }

  findParcelas(id: number) {
    this.parcelas = [];
    this.parcelaLanctoContabil.findParcelasByFatura(id).subscribe({
      next: (data) => {
        this.pageParcelas = 1;
        this.parcelas = data;
      },
      error: (error) => {
        this.exception.alert(error, "Não foi possível carregar as parcelas!");
      }
    })
  }

  findEmpresas() {
    this.empresaService.findAll().subscribe({
      next: (empresas) => {
        this.empresas = empresas;
      },
      error: (error) => {
        this.exception.alert(error, "Não foi possível carregar as empresas!");
      }
    });
  }

  findUsuarios() {
    this.usuarioService.findAll().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
      },
      error: (error) => {
        this.exception.alert(error, "Não foi possível carregar os usuários!");
      }
    });
  }

  formatDate(data: any) {
    return new Date(data);
  }

  totalizador() {
    this.valorTotal = 0;
    this.faturas.map(f => {
      var diferenca = f.fatura.valor - ((f.valor + f.juros + f.multa) - f.desconto);
      this.valorTotal += (diferenca < 0) ? ((f.valor + f.juros + f.multa) - f.desconto) : f.fatura.valor;
    });
  }

  findUsuarioFatura(pagamento: PagamentoModel): String {
    var usuario = 'Usuário não informado';
    if (pagamento.conta != null) {
      usuario = pagamento.conta.usuario.nome;
    } else if (pagamento.cartao != null) {
      usuario = pagamento.cartao.conta.usuario.nome;
    }
    return usuario;
  }

  desvincularParcela(parcela: ParcelaLanctoContabilModel): void {
    this.parcelaLanctoContabil.desvincularParcela(parcela).subscribe(error => {
      this.exception.alert(error, "Não foi possível desvincular a parcela da fatura!");
    });
  }

  situacaoFatura(pagamento: PagamentoModel): string {
    if (pagamento.tipoPagamento == 'M') {
      return 'P'
    } else if (pagamento.valor < pagamento.fatura.valor && this.formatDate(pagamento.fatura.vencimento) < this.now) {
      return 'V'
    } else if (pagamento.valor < pagamento.fatura.valor && this.formatDate(pagamento.fatura.vencimento) >= this.now) {
      return 'A'
    } else if (pagamento.valor >= pagamento.fatura.valor) {
      return 'P'
    }
    return '';
  }

  onCheckboxChange(event: any, pagamento: PagamentoModel) {
    if (event.target.checked) {
      var diferenca = pagamento.fatura.valor - ((pagamento.valor + pagamento.juros + pagamento.multa) - pagamento.desconto);
      this.valores += (diferenca < 0) ? ((pagamento.valor + pagamento.juros + pagamento.multa) - pagamento.desconto) : pagamento.fatura.valor;
      this.pushFaturaSelecionada(pagamento);
    } else {
      var diferenca = pagamento.fatura.valor - ((pagamento.valor + pagamento.juros + pagamento.multa) - pagamento.desconto);
      this.valores -= (diferenca < 0) ? ((pagamento.valor + pagamento.juros + pagamento.multa) - pagamento.desconto) : pagamento.fatura.valor;
      this.spliceFaturaSelecionada(pagamento);
    }

  }

  pushFaturaSelecionada(pagamento: PagamentoModel) {
    if (this.situacaoFatura(pagamento) != 'P') {
      this.faturasSelecionadas.push(pagamento);
    }
  }

  spliceFaturaSelecionada(pagamento: PagamentoModel) {
    for (var index = 0; index < this.faturasSelecionadas.length; index++) {
      var pagto = this.faturasSelecionadas[index];
      if (pagto.fatura.id == pagamento.fatura.id) {
        this.faturasSelecionadas.splice(index, 1);
      }
    }
  }

}
