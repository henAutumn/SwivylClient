import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-activity-timeline',
  template: `
  <div class="card activity-timeline dashboard-card">
    <div class="card-header to-do-header dashboard-header">
          ACTIVITY TIMELINE
    </div>
    <div class="card-body">
      <div *ngFor="let log of logs | slice: 0:6">
      {{log.createdAt | date:"MM/dd/yy"}}
      {{log.clientName}}
      {{log.message}}
      </div>
    </div>
    <div class="card-footer dashboard-footer">
    <a style="color:#a5c856; text-align: left; width:49%; display: inline-block; cursor: pointer;" (click)="open(viewall)">View All Activity</a>
        </div>
  </div>
  <ng-template #viewall let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">Activity Timeline</h4>
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div>

      </div>
      </div>
    </ng-template>
  `
})
export class DashboardActivityComponent implements OnInit {
  companyId: number
  logs: Object[]
  clients: Object[]
  constructor(private modalService: NgbModal) { }
  ngOnInit() {
   
  }

} 

@Component({
  selector: 'app-quick-connect',
  template: `
    <div class="card dashboard-card quick-connect">
      <div class="card-header to-do-header dashboard-header">
        <p class="card-title">QUICK CONNECT</p>
      </div>
      <div class="card-body connect-box">
    
        <select (change)="onChange($event.target.value)" style="width: 100% !important;">
          <option value='default' > Select</option>
          <option *ngFor="let option of options" value="{{option.id}}"> {{option.title}} </option>
        </select>
        <div *ngIf="!currentId || currentId === 'default'">
          <textarea class="connect-textbox" rows="8" cols="75" placeholder="Please select whom to contact from above" disabled></textarea>
        </div>
        <div *ngFor="let description of descriptions">  
            <textarea class="connect-textbox" rows="8" cols="75" placeholder={{description.description}} *ngIf="currentId === description.id"></textarea>
        </div>
      </div>

      <div class="card-footer dashboard-footer">
      <button type='submit' class="btn btn-dark">Submit</button>
      </div>
    </div>
  `
})
export class DashboardQuickConnectComponent implements OnInit {
currentId: any
options: Object[] = [
  {
    "id": 1,
    "title": 'broker'
    },
  {
    "id": 2,
    "title": 'accountant'
  },
  {
    "id": 3,
    "title": 'HR'
  }
]
descriptions: Object[] = [

  {
    "id": '1',
    "description": 'Please type all broker related questions here.'
  },
  {
    "id": '2',
    "description": 'Please type all accountant related questions here.'
  },
  {
    "id": '3',
    "description": 'Please type all HR related questions here.'
  }
]


  ngOnInit() {
    
   }


  onChange(e) {
    this.currentId = e
    console.log(this.currentId)
  }

}