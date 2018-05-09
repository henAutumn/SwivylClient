
// import { Component, OnInit } from '@angular/core';
// import { KittensService } from '../kittens.service';

// @Component({
//   selector: 'app-kittens',
//   templateUrl: './kittens.component.html',
//   styleUrls: ['./kittens.component.scss']
// })
// export class KittensComponent implements OnInit {

//   kittens: Kitten[];

//   constructor(private _kittensService: KittensService) { }

//   ngOnInit() {
//     this.getKittens()
//     this.newKitten()
//     this.updatedKitten()
//     this.deletedKitten()
//   }

//   getKittens(){
//     this._kittensService.getAllKittens().subscribe((kittenResult: any) => {
//       console.log(kittenResult);
//     })
//   }
  
//   newKitten(){
//     let name="Nova"
//     let color="brown"
//     let fat=false
//     let fierce=false

//     this._kittensService.newKitten(name, color, fat, fierce).subscribe((res:any) => {
//       console.log(res)
//     })
//   }

//   updatedKitten(){
//     let id="cjgqz49gmu7qh0b06jezpy34j"
//     let name="CatDad"
//     let color="black"
//     let fat=false
//     let fierce=false

//     this._kittensService.updatedKitten(id, name, color, fat, fierce).subscribe((res:any) => {
//       console.log(res)
//     })
//   }

//   deletedKitten(){
//     let id="cjgqzvhptufcb0b06ujhskn00"

//     this._kittensService.deletedKitten(id).subscribe((res:any) => {
//       console.log(res);
//     })
//   }

// }

// interface Kitten{
//   name: String,
//   color: String,
//   fat: Boolean,
//   fierce: Boolean
//   owner: Object
//   id: String
// }

