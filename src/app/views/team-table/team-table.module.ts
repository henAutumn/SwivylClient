import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import {CommonModule} from '@angular/common';
import { SlicePipe } from '@angular/common';
import { TeamTableComponent } from './team-table.component';
import { TeamTableRoutingModule } from './teamtable-routing.module';
import {AccManagementService} from '../../Services/acc-management.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TeamTableRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    NgbModule.forRoot()
  ],
  declarations: [ 
    TeamTableComponent
],
  providers: [
    NgbActiveModal,
    AccManagementService
  ]
})
export class TeamTableModule { }