import { Component, OnInit } from '@angular/core';
import { AccManagementService } from '../../Services/acc-management.service';

@Component({
  selector: 'app-acc-management',
  templateUrl: './acc-management.component.html',
  styleUrls: ['./acc-management.component.scss']
  
})
export class AccManagementComponent implements OnInit {

  constructor(
    private _accmanagementservice: AccManagementService) { }

  ngOnInit() {
    // this.newUser()
  }


  newUser(e) {
    let createdUser = {
      email: e.target[0].value,
      password: e.target[1].value,
      firstName: e.target[2].value,
      lastName:e.target[3].value
    }
    this._accmanagementservice.createUser(createdUser.email, createdUser.password, createdUser.firstName, createdUser.lastName).subscribe((res: any) => {
      console.log(res)
    })
  }
}

