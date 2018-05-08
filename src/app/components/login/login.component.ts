import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  login(e) {
       let login={
        email:e.target[0].value,
        password:e.target[1].value
       }
    
    this._loginService.loginUser(login.email, login.password)
      .subscribe((res:any) => {
      localStorage.setItem("token",res.data.login.token);
        if(localStorage.token){
          this.router.navigate(['/profile'])
        }else{
          this.router.navigate(['/login'])
        }
      });
    }
  



}
interface User{
  id:String,
  name: String,
  email:String,
  password:String,
  agency:object,
}