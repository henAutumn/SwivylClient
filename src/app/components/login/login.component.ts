import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fullImagePath: String;

  constructor(private _loginService: LoginService, private router: Router) {this.fullImagePath = '../../../assets/img/Swivyl_Logo_Web_Black-Blue.png' }

  ngOnInit() {

  }

  login(e) {
    let loggedUser = {
      email: e.target[0].value,
      password: e.target[1].value
    }
    this._loginService.loginUser(loggedUser.email, loggedUser.password).subscribe((res: any) => {
      localStorage.setItem('token', res.data.login.token)
      if(localStorage.token){
        this.router.navigate(['/profile'])
      } else {
        this.router.navigate(['/login'])
      }
    })
  }
}

interface User {
  name: String,
  email: String,
  password: String,
  agency: Object,
  id: String
}

