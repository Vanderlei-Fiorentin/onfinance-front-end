import { Component, OnInit } from '@angular/core';
import { EventoModel } from 'src/app/core/models/evento.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { EventoService } from 'src/app/core/services/evento.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-listagem-evento',
  templateUrl: './listagem-evento.component.html',
  styleUrls: ['./listagem-evento.component.css']
})
export class ListagemEventoComponent implements OnInit {

  eventos: EventoModel[] = [];
  eventosListados: EventoModel[] = [];
  tiposEventos: any = { 'P': 'Provento', 'D': 'Desconto' };
  paginaAtual: number = 1;
  pesquisa: string = ''
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private eventoService: EventoService,
    private alertService: AlertService,
    private exception: ExceptionService) { }

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos() {
    this.eventoService.findAll().subscribe(eventos => {
      this.paginaAtual = 1;
      this.eventos = eventos;
      this.eventosListados = eventos;
    }, error => {
      this.exception.alert(error, 'Erro ao carregar eventos!');
    });
  }

  remove(id: number) {
    this.eventoService.remove(id).subscribe({
      next: () => {
        this.alertService.success('Evento removido com sucesso!', this.options);
        this.getEventos();
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao remover evento!');
      }
    });
  }

  filtrar(pesquisa: string) {
    this.eventos = this.eventosListados.filter(e => e.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
  }

}
