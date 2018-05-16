import { Component, OnInit } from '@angular/core';
import { AccManagementService } from '../../Services/acc-management.service';
import { AgencyService } from '../../Services/agency.service';


@Component({
  selector: 'app-acc-management',
  templateUrl: './acc-management.component.html',
  styleUrls: ['./acc-management.component.scss']
  
})
export class AccManagementComponent implements OnInit {
  userCount=0
  constructor(
    private _accmanagementservice: AccManagementService,
    private _agencyservice: AgencyService
  ) { }

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

  newAgency(e){
    let createdAgency = {
      masteruser: "cjh97agdnkd8b0b62uq5ikbyv ",// inyuyasha
      name: e.target[0].value,
      img: e.target[1].value,
    }
    this._agencyservice.createAgency(createdAgency.masteruser, createdAgency.name, createdAgency.img).subscribe(
      (res:any) => {alert('You have succesfully created an Agency')},
      (error:any) => {alert('There was an error')}
    )
 }

 
}

