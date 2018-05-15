import { Component, OnInit } from '@angular/core';
import { AccManagementService } from '../../Services/acc-management.service';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {
  users = [ ];
  updatedUser = {};

  constructor( private _accmanagementservice: AccManagementService) { }

  ngOnInit() {
    this.getAllUsers();
    // this.addNewUsers();
  }

  getAllUsers=()=>{
    this._accmanagementservice.getUsers().subscribe(
      (res:any)=>{
        this.users= res.data.users
      })
  }

  onUpdate(user){
    this.updatedUser=user
  }

  updateTrigger(e){
  let updatedUser={
    id: e.target[0].value,
    email: e.target[1].value,
    firstName: e.target[2].value,
    lastName: e.target[3].value,
    title: e.target[4].value
  }
  this._accmanagementservice.updateUser(updatedUser.id, updatedUser.email, updatedUser.firstName, updatedUser.lastName, updatedUser.title).subscribe(
    (res: any) => {alert('You have updated a user')},
    (error: any) => console.log(error)
  )
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
      (res: any) => { alert(`You have succesfully created ${res.data.createUser.user.firstName}'s account! `)},
      (error:any)=>{ alert(`There is already an account associated with that email address`)})
  }

  sortTable(n){
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("teamTable");
    switching = true;

    dir = "asc";

    while(switching){
      switching = false;
      rows = table.getElementsByTagName("TR");

      for(i = 1; i < (rows.length - 1 ); i++){
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];

        if (dir == "asc"){
          if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
            shouldSwitch = true;
            break;
          }
        }else if(dir == "desc"){
          if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
            shouldSwitch = true;
            break;
          }
        }
      }
      if(shouldSwitch){
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      }else{
        if(switchcount == 0 && dir == "asc"){
          dir = "desc";
          switching = true;
        }
      }
    }
  }

}
