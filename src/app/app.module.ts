import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule, NgIf, NgForOf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms'
import { AppComponent } from './app.component';
import { ApolloModule, Apollo } from 'apollo-angular'; //Apollo Module
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';//Apollo Module
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { LoginService } from './Services/login.service'
import { UploadImageService } from './Services/upload-image.service';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent,
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  APP_SIDEBAR_NAV,
  AppFooterComponent,

} from './components';

const APP_COMPONENTS = [
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  APP_SIDEBAR_NAV,
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PolicyCornerComponent } from './views/policy-corner/policy-corner.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGaurd } from './guards/auth.guard';
import { AgencyService } from './Services/agency.service';
import { AppBreadcrumbsComponent } from './components/app-breadcrumbs';
import { DashboardSnapshotComponent } from './views/dashboard/dashboard-snapshot.component';
import { DashboardToDoComponent } from './views/dashboard/dashboard-to-do.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    //Apollo Modules
    ApolloModule,
    HttpLinkModule,
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    PolicyCornerComponent,
    ContactComponent,
    LoginComponent,
    AppFooterComponent,
    AppBreadcrumbsComponent,
    DashboardSnapshotComponent,
    DashboardToDoComponent

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },

    AgencyService,
    LoginService,
    UploadImageService,
    AuthGaurd


  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(apollo: Apollo, httpLink: HttpLink) {
    const authLink = setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      const token = localStorage.getItem('token');
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
      }
    });

    const httpsLink = createHttpLink({
      uri: 'http://localhost:4000',
    });

    apollo.create({
      link: authLink.concat(httpsLink),
      cache: new InMemoryCache()
    });
  }
}