import { Component, OnInit } from '@angular/core';
//services import (these are the api calls)


@Component({
  templateUrl: './company-profile-risk.component.html',
})
export class CompanyProfileRiskComponent implements OnInit {
  added: Boolean
  dismissible = true;
  alert: any = 'Property has been added'

  properties:object
  entities:object 
  companies:object
  constructor() { }

  ngOnInit() {
    
    }
}
