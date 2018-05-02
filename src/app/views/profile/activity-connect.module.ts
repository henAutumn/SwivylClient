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
        <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div *ngFor="let log of logs">
      {{log.createdAt | date:"MM/dd/yy"}}
      {{log.clientName}}
      {{log.message}}
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