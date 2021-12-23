import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-alteracao-cartao',
  templateUrl: './alteracao-cartao.component.html',
  styleUrls: ['./alteracao-cartao.component.css']
})
export class AlteracaoCartaoComponent implements OnInit {

  cartao!: CartaoCreditoModel;
  contas: ContaCorrenteModel[] = [];
  bandeiras: BandeiraModel[] = [];
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private cartaoService: CartaoService,
    private contaService: ContaService,
    private bandeiraService: BandeiraService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.findById(params['id']);
    });
    this.findContas();
    this.findBandeiras();
  }

  findById(id: number) {
    this.cartaoService.findById(id).subscribe({
      next: (cartao) => {
        cartao.validade = FunctionsUtil.dateFormat(cartao.validade);
        this.cartao = CartaoCreditoModel.builder(cartao);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao buscar o cartão de crédito!');
      }
    });
  }

  update() {
    this.cartaoService.update(this.cartao).subscribe({
      next: () => {
        this.alertService.success('Cartão de crédito alterado com sucesso!', this.options);
        this.router.navigate(['cartoes']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram alterados!');
      }
    });
  }

  validarAlteracoes() {
    /*var emitirMsg = (this.diaVenctoAtual !== this.cartao.diaVencto) ? true : false;
    if (emitirMsg === true) {
      this.exception.alert(error, {
        title: 'Você confirma a alteração?',
        text: "Alterando o dia de vencimento, o vencimento das faturas em aberto serão alterados!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, desejo alterar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value === true) {
          this.update();
        }
      });
    } else {
      this.update();
    }*/
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
