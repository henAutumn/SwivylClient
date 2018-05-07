import { Component, OnInit } from '@angular/core';
import { KittenService } from '../kitten.service';


@Component({
  selector: 'app-kittens',
  templateUrl: './kittens.component.html',
  styleUrls: ['./kittens.component.scss']
})
export class KittensComponent implements OnInit {

  kittens: Kitten[]

  constructor(private _kittenService:KittenService) { }

  ngOnInit() {
    this.newKitten()
    this.getKittens()
    this.updatedKitten()
    this.getKittens()
    this.deletedKitten()
  }
  
  getKittens(){this._kittenService.getAllKittens().subscribe((kittenResult:any)=>{
    console.log(kittenResult)
  })}

  newKitten(){
    let name="rodrigo"
    let color="azule"
    let isFat=true
    let isFierce=true

    this._kittenService.newKitten(name, color, isFat, isFierce).subscribe((res:any)=>{
      console.log(res)
    })
  }

  updatedKitten(){
    let id="cjgqvb9sytif10b06dv0e8esz"
    let name="sven"
    let color="cold"
    let isFat=false
    let isFierce=true

    this._kittenService.updatedKitten(id, name, color, isFat, isFierce).subscribe((res:any)=>{
      console.log(res)
    })

  }
  deletedKitten(){
    let id="cjgqztucvuevm0b06s48w22li"
    
    this._kittenService.deletedKitten(id).subscribe((res:any)=>{
      console.log(res)
    })
  }

}

interface Kitten{
  name:String,
  color:String,
  isFat:Boolean,
  isFierce:Boolean,
  owner:Object,
  id:String
}