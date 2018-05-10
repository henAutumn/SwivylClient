import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { TeamTableComponent } from './team-table.component';

const routes: Routes = [
  {
    path: '',
    component: TeamTableComponent,
    data: {
      title: 'Team-Table'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamTableRoutingModule {}