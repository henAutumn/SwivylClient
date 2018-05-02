import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'




@Component({
  selector: 'app-shareholder-card',
  templateUrl: './company-shareholder-card.component.html',
  styles: ['button{margin: 5px}']
  
})
export class CompanyShareholderCardComponent implements OnInit {
  companyId: string = localStorage.getItem('company')
  shareholders: object
  updateId: any
  confirm: any
  modalRef: any
  entities: object
  companies: object
  constructor() { }
  
  ngOnInit() {}
}