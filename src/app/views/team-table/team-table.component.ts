import { Component, OnInit } from '@angular/core';
import { AccManagementService } from '../../Services/acc-management.service';
import { Title } from '@angular/platform-browser';
// import { Location } from '@angular/common';

@Component({
  templateUrl: 'team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {
  users = [];
  updatedUser = {};
  deletedUser = {};
  constructor(private _accmanagementservice: AccManagementService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    const id = localStorage.getItem("agency")
    this._accmanagementservice.getUsers(id).subscribe(
      (res: any) => {
          this.users = res.data.agency.teammembers  
      })
  }

  addMember(result){
    let addedMember = {
      agency:localStorage.getItem("agency"),
      id:result.data.createUser.user.id
    }
    this._accmanagementservice.addTeamMember(addedMember.agency, addedMember.id).subscribe(
      (res:any) =>{
        this.getAllUsers();
      }    
    )
  }


  onUpdate(user) {
    this.updatedUser = user
  }

  updateTrigger(e) {
    if (localStorage.getItem("isMU") == "true"){
      let updatedUser = {
        id: e.target[0].value,
        email: e.target[1].value,
        firstName: e.target[2].value,
        lastName: e.target[3].value,
        title: e.target[4].value
      }
      this._accmanagementservice.updateUser(updatedUser.id, updatedUser.email, updatedUser.firstName, updatedUser.lastName, updatedUser.title).subscribe(
        (res: any) => { alert('You have updated a user'), this.getAllUsers()
      },
      (error: any) => console.log(error)
    )
  } else{
    alert("You are not authoized to update users.")
  }
  }

  deleteTrigger(id) {
    if (localStorage.getItem("isMU") == "true"){
      this.deletedUser = id
      if (confirm("Are you sure you want to delete this user?")) {
        this._accmanagementservice.deleteUser(id).subscribe(
          (res: any) => {
            alert("You have successfully deleted this user")
            this.getAllUsers()
          },
          (error: any) => { alert("There was an error") }
        )
      } else {
        alert("User Delete was cancelled")
      }
    } else{
      alert("You are not authorized to delete User.")
    }
  }

    newUser(e) {
      let agency =  localStorage.getItem("agency");
      if (localStorage.getItem("isMU") == "true"){
        let createdUser = {
          email: e.target[0].value,
          password: e.target[1].value,
          firstName: e.target[2].value,
          lastName: e.target[3].value,
          title: e.target[4].value,
          isMU:false,
          agency:agency
        }
        this._accmanagementservice.createUser(createdUser.email, createdUser.password, createdUser.firstName, createdUser.lastName, createdUser.title , createdUser.isMU, createdUser.agency).subscribe(
          (res: any) => { alert(`You have succesfully created ${res.data.createUser.user.firstName}'s account! `);
          this.addMember(res);
        },
        (error: any) => {
          alert(`There is already an account associated with that email address`) 
        })
      } else{
        alert('You are not authorized to add new user')
      }
    }

    sortTable(n){
      let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("teamTable");
      switching = true;

      dir = "asc";

      while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");

        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;

          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];

          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchcount++;
        } else {
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    }

  }
