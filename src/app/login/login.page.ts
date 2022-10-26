import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globaless } from '../app.component';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  public login: string;
  public email: string;
  private password: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService : AuthService, //se injecta SERVICIO --
    ) { }



  ngOnInit() {
    this.login = this.activatedRoute.snapshot.paramMap.get('id');
  }

 
  logginEmail(){
    console.log (this.email);
    this.authService.loginUserEmail(this.email,this.password)
  }

  logOut(){
    console.log ('Logout is Comming');
    this.authService.loggout()
  }
}
