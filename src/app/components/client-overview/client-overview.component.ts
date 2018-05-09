import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss']
})
export class ClientOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sortTable(){
    let table, rows, switching , i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;

    while(switching){
      switching = false;
      rows = table.getElementById("TR");
      for(i = 1; i < (rows.length - 1); i++){
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];

        if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
          shouldSwitch = true;
          break;
        }
      }
      if(shouldSwitch){
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
}
