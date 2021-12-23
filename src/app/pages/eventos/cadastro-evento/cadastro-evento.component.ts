import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoModel } from 'src/app/core/models/evento.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { EventoService } from 'src/app/core/services/evento.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.css']
})
export class CadastroEventoComponent implements OnInit {

  evento: EventoModel;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };


  constructor(
    private eventoService: EventoService,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) {
    this.evento = new EventoModel();
  }

  ngOnInit() { }

  save(): void {
    this.eventoService.save(this.evento).subscribe({
      next: () => {
        this.alertService.success('Evento inserido com sucesso!', this.options);
        this.router.navigate(['eventos']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram inseridos!');
      }
    });
  }

}
