
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
