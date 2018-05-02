import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { elementAt } from 'rxjs/operators/elementAt';


@Component({
  selector: 'app-to-do',
  templateUrl: './dashboard-to-do.html'
})
export class DashboardToDoComponent implements OnInit {
  closeResult: string;
  companyId: number;
  tasks: object[];
  show: boolean = true;
  taskValue: string = ''
  date: any = new Date().toISOString().slice(0,10);
  currentId: any; 
  modalRef: any;
  confirm: any;
 

  constructor( private modalService: NgbModal, private modalActive: NgbActiveModal) { }

  ngOnInit() {

  }
}