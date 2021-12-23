import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BandeiraModel } from 'src/app/core/models/bandeira.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { BandeiraService } from 'src/app/core/services/bandeira.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-cadastro-bandeira',
  templateUrl: './cadastro-bandeira.component.html',
  styleUrls: ['./cadastro-bandeira.component.css']
})
export class CadastroBandeiraComponent implements OnInit {

  bandeira: BandeiraModel;
  logo!: File;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private bandeiraService: BandeiraService,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) {
    this.bandeira = new BandeiraModel();
  }

  ngOnInit() {

  }

  save() {

    var formData: FormData = new FormData();

    if (this.logo != undefined) {
      formData.append('file', this.logo, this.logo.name);
    }

    formData.append('bandeira', JSON.stringify(this.bandeira));

    this.bandeiraService.saveFormData(formData).subscribe({
      next: () => {
        this.alertService.success('Bandeira inserida com sucesso!', this.options);
        this.router.navigate(['bandeiras']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram inseridos!');
      }
    });

  }

  onChange(event: any) {
    this.logo = event.target.files[0];
    console.log(this.logo);
  }

}
