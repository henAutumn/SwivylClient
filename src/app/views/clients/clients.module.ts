import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import {CommonModule} from '@angular/common';
import { SlicePipe } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    NgbModule.forRoot()
  ],
  declarations: [ 
    ClientsComponent
],
  providers: [
    NgbActiveModal
  ]
})
export class ClientsModule { }