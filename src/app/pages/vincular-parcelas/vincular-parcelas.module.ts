import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VincularParcelasComponent } from './vincular-parcelas.component';
import { VincularParcelasRoutingModule } from './vincular-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VincularParcelasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    VincularParcelasRoutingModule
  ]
})
export class VincularParcelasModule { }
