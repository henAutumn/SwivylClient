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
import { AccManagementComponent } from '../../components/acc-management/acc-management.component';
import { ClientOverviewComponent } from '../../components/client-overview/client-overview.component';
import {AccManagementService} from '../../Services/acc-management.service';
import { ClientServicesComponent } from '../../components/client-services/client-services.component';


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
  declarations: [ DashboardComponent, AccManagementComponent, 
  ClientOverviewComponent, ClientServicesComponent],
  providers: [
    NgbActiveModal
  ]
})
export class DashboardModule { }
