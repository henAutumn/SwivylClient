import { Component, OnInit } from '@angular/core';
import { KittenService } from '../kitten.service';

@Component({
  selector: 'app-kittens',
  templateUrl: './kittens.component.html',
  styleUrls: ['./kittens.component.scss']
})
export class KittensComponent implements OnInit {
  kittens: Kitten[];
  constructor(private _kittenService: KittenService) { }

  ngOnInit() {
    this.getKittens()
    this.newKitten()
    this.updatedKitten()
    this.deletedKitten()
  }
  getKittens(){
    this._kittenService.getAllKittens().subscribe((kittenResult:any)=>{
      console.log(kittenResult);
      
    })

  }
  newKitten(){
    let name= "Grizzabella"
    let color= "white"
    let fat =  true
    let fierce = true

    this._kittenService.newKitten(name, color, fat, fierce).subscribe((res:any)=>{
      console.log(res);
      
    })

  }

  updatedKitten(){
    let id = "cjgryzln10q860b061lgpt6i0"
    let name = "Griz"
    let color = "white"
    let fat = true
    let fierce = true
  
    this._kittenService.updatedKitten(id, name, color, fat, fierce).subscribe((res: any)=>{
      console.log(res);
      
    })
  }

  deletedKitten(){
    let id = "cjgryzln10q860b061lgpt6i0"
    this._kittenService.deletedKitten(id).subscribe((res: any)=>{
      console.log(res);
      
    })
  }
}


interface Kitten{
  name: String,
  color: String,
  fat: boolean,
  fierce: boolean,
  owner: Object,
  id: String
}
