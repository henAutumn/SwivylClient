import { Component, OnInit} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';
import { UploadImageService } from '../../Services/upload-image.service';


@Component({
  selector: 'app-sidebar-header',
  templateUrl: './app-sidebar-header.component.html'
})
export class AppSidebarHeaderComponent {

  selectedFile: File = null;
  companyImage:string
  firstName:string
  lastName:string

  constructor(private apollo: Apollo, private _uploadimageservice: UploadImageService){}

  ngOnInit(){
  }

  
  
  imageSubmit(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  
  imageSubmitClick(event) {
    let input = document.getElementById('imageSelect')
    console.log(input)
    input.click()
  }

  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name)
  //   this._uploadimageservice.createUpload().subscribe((res: any ) => {
  //     console.log(res)
  //   })
  // }

  displayName(){
    let name = localStorage.getItem('name'); 
  }
 }
