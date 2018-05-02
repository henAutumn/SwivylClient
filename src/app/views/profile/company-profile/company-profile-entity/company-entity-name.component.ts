
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Apollo } from 'apollo-angular';
import { INTERFACE_TYPE_DEFINITION } from 'graphql/language/kinds';
import { DocumentNode } from 'graphql';

@Component({
selector: "app-entity-name",
template: ` 
<form>
  <div class="row justify-content-center">
    <h4>WHAT IS YOUR ENTITY NAME?</h4>
  </div>
  <div class="row justify-content-center" >
  <div class="col-sm-5">
    <div class="entity-card card">
      <div class="card-newcard-body" style="text-align:center; padding:.5em 1em; font-size: 1rem;">
        <div class="row">
          <div class="col" (change)="pullCompanyEntities($e)" *ngFor="let entity of entities">{{entity.entity_name}}</div>
          <div class="col-1"><i class="fa fa-trash " id="{{entity.id}}" (click)="removeEntity($event)"></i>
          </div><div class="col-1"><i></i></div>
        </div>
      </div>
    </div>
  </div>
</div>
        <div class="row justify-content-center">
          <div class="col-sm-5">
            <div class="input-group">
              <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
              <select style="background-color: #fff; height: 35px">

                <option *ngFor="let company of companies" value="{{company.id}}">{{company.name}}</option>

              </select>
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
          <button type="submit" class="btn btn-dark">Add Entity</button>
        </div>
      
</form>

`,
})
export class CompanyEntityNameComponent implements OnInit {

companies:object
entities: object
closeResult: string
targetedEntity: string
modalRef: any;

constructor(private _apollo:Apollo , private modalService: NgbModal) { }
ngOnInit() {
  
}
}
