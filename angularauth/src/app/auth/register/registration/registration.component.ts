import { Component, OnInit } from '@angular/core';
import { AuthResponse } from 'src/app/models/response';
import { UserData } from 'src/app/models/user';
import { NetworkService } from 'src/app/services/network.service';
import { Api } from 'src/app/utils/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerData: UserData={
    email: '',
    password: ''
  }

  data: AuthResponse = {
    token: ''
  }

  constructor(
    private _networkService: NetworkService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){  
    console.log(this.registerData);
    this._networkService.registerUser( Api.registerUrl,this.registerData)
    .subscribe(
      response =>{
        this.data = response
        console.log("tokenNNNNNN",this.data.token);
      
        localStorage.setItem("token", this.data.token)
        this.router.navigate(["/login"])
      }
      
    )
    
  }
}
