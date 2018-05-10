import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

import { PolicyCornerComponent } from './views/policy-corner/policy-corner.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'clients',
        loadChildren: './views/clients/clients.module#ClientsModule'
      },
      {
        path: 'team-table',
        loadChildren: './views/team-table/team-table.module#TeamTableModule'
      },
      {
        path: 'assets',
        loadChildren: './views/assets/assets.module#AssetsModule'
      },
      {
        path: 'policy-corner',
        component: PolicyCornerComponent
      },
      {
        path: 'contact-agent',
        component: ContactComponent
      },
      // {
      //   path: 'kittens',
      //   component: KittensComponent
      // }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
             
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
