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
    const id = localStorage.getItem("agency");
    this._accmanagementservice.getUsers(id).subscribe(
      (res:any)=>{
         this.userCount = res.data.agency.teammembers.length;
      })
  }


  newUser(e) {
    if (localStorage.getItem("isMU") == "true"){
      let createdUser = {
        email: e.target[0].value,
        password: e.target[1].value,
        firstName: e.target[2].value,
        lastName:e.target[3].value,
        title:e.target[4].value,
        isMU: false,
        agency:localStorage.getItem("agency"),
      }
      this._accmanagementservice.createUser(createdUser.email, createdUser.password, createdUser.firstName, createdUser.lastName, createdUser.title, createdUser.isMU, createdUser.agency).subscribe(
        (res: any) => { alert(`You have succesfully created ${res.data.createUser.user.firstName}'s account! `), 
        this.getAllUsers();
        this.addMember(res)  
      },
      (error:any)=>{ alert(`There is already an account associated with that email address`)})
    } else{
      alert('You are not authorized to create users')
    }
  }

  addMember(res){
    let addedMember = {
      agency:localStorage.getItem("agency"),
      id:res.data.createdUser.user.id
    }
    this._accmanagementservice.addTeamMember(addedMember.agency, addedMember.id).subscribe(
      (res:any) =>{console.log(res)}
    )
  }

 updateAgency(e){
    if (localStorage.getItem("isMu") == "true"){
      let createdAgency = {
        masteruser: "cjhala570qfo20b62x0sar5fr",// masteruser
        name: e.target[0].value,
        img: e.target[1].value
      }
      this._agencyservice.createAgency(createdAgency.masteruser, createdAgency.name, createdAgency.img).subscribe(
        (res:any) => {alert('You have succesfully created an Agency')},
        (error:any) => {alert('There was an error')}
      )
    }else{
      alert("You are not authorized to add a new Agency.")
    }
  }

 
}

