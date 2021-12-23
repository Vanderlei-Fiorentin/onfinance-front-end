import { Component, OnInit } from '@angular/core';
import { BandeiraModel } from 'src/app/core/models/bandeira.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { BandeiraService } from 'src/app/core/services/bandeira.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-listagem-bandeira',
  templateUrl: './listagem-bandeira.component.html',
  styleUrls: ['./listagem-bandeira.component.css']
})
export class ListagemBandeiraComponent implements OnInit {

  bandeiras: BandeiraModel[] = [];  
  bandeirasListadas: BandeiraModel[] = [];
  paginaAtual: number = 1;
  pesquisa: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private bandeiraService: BandeiraService, 
    private alertService: AlertService, 
    private exception: ExceptionService) { }

  ngOnInit() {
    this.getBandeiras();
  }

  getBandeiras() {
    this.bandeiraService.findAll().subscribe(bandeiras => {
      this.paginaAtual = 1;
      this.bandeiras = bandeiras;
      this.bandeirasListadas = bandeiras;
    }, error => {
      this.exception.alert(error, 'Não foi possível carregar as bandeiras de cartões de crédito!');
    });
  }

  remove(id: number){
    this.bandeiraService.remove(id).subscribe(bandeiras => {
      this.alertService.success('Bandeira removida com sucesso!', this.options);
      this.getBandeiras();
    }, error => {
      this.exception.alert(error, 'Os dados não foram removidos!');
    });
  }

  filtrar(pesquisa: string) {
    this.bandeiras = this.bandeirasListadas.filter(b => b.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
  }

}
