import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoModel } from 'src/app/core/models/evento.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { EventoService } from 'src/app/core/services/evento.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-alteracao-evento',
  templateUrl: './alteracao-evento.component.html',
  styleUrls: ['./alteracao-evento.component.css']
})
export class AlteracaoEventoComponent implements OnInit {

  evento!: EventoModel;  
  idEvento: number = 1;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.findById(params['id']);
    });
  }

  update(): void {
    this.eventoService.update(this.evento).subscribe({
      next: () => {
        this.alertService.success('Evento alterado com sucesso!', this.options);
        this.router.navigate(['eventos']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram alterados!');
      }
    });
  }

  async findById(id: number) {
    await this.eventoService.findById(id).subscribe({
      next: (evento) => {
        this.evento = EventoModel.builder(evento);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao buscar o evento!');
      }
    });
  }

}
