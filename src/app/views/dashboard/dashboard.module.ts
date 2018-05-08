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
<<<<<<< HEAD
import { DashboardToDoComponent } from './dashboard-to-do.component'
import { DashboardSnapshotComponent } from './dashboard-snapshot.component'
import { DashboardInsuredComponent } from './dashboard-insured.module';
import { AccManagementService } from '../../Services/acc-management.service'
=======
import { AccManagementComponent } from '../../components/acc-management/acc-management.component';
import { ClientOverviewComponent } from '../../components/client-overview/client-overview.component';
import {AccManagementService} from '../../Services/acc-management.service';
import { ClientServicesComponent } from '../../components/client-services/client-services.component';
>>>>>>> ea9de6ab2cd7ddf237707835c108dae5ef577f55


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
    NgbActiveModal,
    AccManagementService
  ]
})
export class DashboardModule { }
