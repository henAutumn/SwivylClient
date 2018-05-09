import { Component, OnInit } from '@angular/core';
import { AccManagementService } from '../../Services/acc-management.service';
@Component({
  selector: 'app-acc-management',
  templateUrl: './acc-management.component.html',
  styleUrls: ['./acc-management.component.scss']
})
export class AccManagementComponent implements OnInit {
  
  constructor(private _accManagementService: AccManagementService) { }

  ngOnInit() {
    // this.newUser()
  }

  // newUser(){
  //   let email = "hey@gmail.com"
  //   let password = "hey123*"
  //   let name = "Trace"
  //   this._accManagementService.createUser(email, password, name).subscribe((userResult: any)=>{
  //     console.log(userResult);
      
  //   })
  // }
}
