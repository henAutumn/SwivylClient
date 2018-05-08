import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { tokenKey } from '@angular/core/src/view';
import { Token } from '@angular/compiler';
import { STRING } from 'graphql/language/kinds';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit() {
   this.loginUser()
  }
  loginUser(){
    let email = "mcgraw.trace@gmail.com"
    let password = "Vegan123*"

    this._loginService.loginUser(email, password).subscribe((res: any)=>{
      console.log(res);
      
    })
  }
  
  login(e) {
    let login = {
      email: e.target[0].value,
      password: e.target[1].value
    }
    this._loginService.loginUser(login.email, login.password).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem("token", res.data.login.token);
      if(localStorage.token){
        this.router.navigate(['/profile'])
      }else{
        this.router.navigate(['/login'])
      }
      
    });
    console.log(login.email);
    
           

  }
}


interface User{
  id: String,
  name: String,
  email: String,
  password: String,
  agency: Object
}
