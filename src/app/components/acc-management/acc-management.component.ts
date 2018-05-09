import { Component, OnInit } from '@angular/core';
import { AccManagementService } from '../../Services/acc-management.service';



@Component({
  selector: 'app-acc-management',
  templateUrl: './acc-management.component.html',
  styleUrls: ['./acc-management.component.scss']
})
export class AccManagementComponent implements OnInit {

  constructor(private _accmanagementservice: AccManagementService) { }

  ngOnInit() {
    this.newUser();
  }

  newUser(){
    let email="you@you.com"
    let password="hey"
    let name="Autumn"
    this._accmanagementservice.createUser(email, password, name).subscribe((res:any)=>{
      console.log(res)
    })
  }

  

}
