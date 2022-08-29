import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { AuthResponse } from 'src/app/models/response';
import { UserData } from 'src/app/models/user';
import { NetworkService } from 'src/app/services/network.service';
import { Api } from 'src/app/utils/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: UserData ={
    email: '',
    password: ''
  }
  data: AuthResponse={
    token: ''
  }
  constructor(
    private netService: NetworkService,
    private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    //console.log("LoginData", this.loginData);
    this.netService.doLogin(Api.loginUrl, this.loginData)
    .subscribe(response=>{
      this.data  = response

      console.log("tokenNNNNNN",this.data.token);
      
      localStorage.setItem("token", this.data.token)

      this.router.navigate(["/special"])
      
    }
    
    )
  }

}
