import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  sistema: string;

  constructor() { 
    this.sistema = environment.sistema;
  }

  ngOnInit(): void {

  }

}
