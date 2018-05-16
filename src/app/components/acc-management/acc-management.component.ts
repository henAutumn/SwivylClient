import { Component, OnInit } from '@angular/core';
import { AccManagementService } from '../../Services/acc-management.service';

@Component({
  selector: 'app-acc-management',
  templateUrl: './acc-management.component.html',
  styleUrls: ['./acc-management.component.scss']
  
})
export class AccManagementComponent implements OnInit {
  userCount=0
  constructor(
    private _accmanagementservice: AccManagementService) { }

  ngOnInit() {
    // this.newUser()
    this.getAllUsers();
  }

  getAllUsers=()=>{
    this._accmanagementservice.getUsers().subscribe(
      (res:any)=>{
         this.userCount = res.data.users.length;
        
      })
  }


  newUser(e) {
    let createdUser = {
      email: e.target[0].value,
      password: e.target[1].value,
      firstName: e.target[2].value,
      lastName:e.target[3].value,
      title:e.target[4].value
    }
    this._accmanagementservice.createUser(createdUser.email, createdUser.password, createdUser.firstName, createdUser.lastName, createdUser.title).subscribe(
      (res: any) => { alert(`You have succesfully created ${res.data.createUser.user.firstName}'s account! `), this.getAllUsers()
    },
      (error:any)=>{ alert(`There is already an account associated with that email address`)})
  }

 
}

