import { Component, OnInit } from '@angular/core';
import { AccManagementService } from '../../Services/acc-management.service';

@Component({
  templateUrl: 'team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {
  users = [ ]

  constructor( private _accmanagementservice: AccManagementService) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers=()=>{
    this._accmanagementservice.getUsers().subscribe(
      (res:any)=>{
        this.users= res.data.users
      })
  }

}
