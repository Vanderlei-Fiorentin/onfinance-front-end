import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BandeiraModel } from 'src/app/core/models/bandeira.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { BandeiraService } from 'src/app/core/services/bandeira.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-alteracao-bandeira',
  templateUrl: './alteracao-bandeira.component.html',
  styleUrls: ['./alteracao-bandeira.component.css']
})
export class AlteracaoBandeiraComponent implements OnInit {

  bandeira!: BandeiraModel;
  logo!: File;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bandeiraService: BandeiraService,
    private alertService: AlertService,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.findById(params['id']);
    });
  }

  update() {

    var formData: FormData = new FormData();

    if (this.logo != undefined) {
      formData.append('file', this.logo, this.logo.name);
    }

    formData.append('bandeira', JSON.stringify(this.bandeira));

    this.bandeiraService.updateFormData(formData).subscribe({
      next: () => {
        this.alertService.success('Bandeira atualizada com sucesso!', this.options);
        this.router.navigate(['bandeiras']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram alterados!');
      }
    });

  }

  findById(id: number) {
    this.bandeiraService.findById(id).subscribe({
      next: (bandeira) => {
        this.bandeira = BandeiraModel.builder(bandeira);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao buscar a bandeira!');
      }
    });
  }

  onChange(event: any) {
    this.logo = event.target.files[0];
    console.log(this.logo);
  }

}
