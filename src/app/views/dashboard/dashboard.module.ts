import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import {CommonModule} from '@angular/common';
import { SlicePipe } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardToDoComponent } from './dashboard-to-do.component'
import { DashboardSnapshotComponent } from './dashboard-snapshot.component'
import { DashboardInsuredComponent } from './dashboard-insured.module';
import { AccManagementService } from '../../Services/acc-management.service'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    NgbModule.forRoot()
  ],
  declarations: [ DashboardComponent, DashboardInsuredComponent,  DashboardToDoComponent],
  providers: [
    NgbActiveModal,
    AccManagementService
  ]
})
export class DashboardModule { }
