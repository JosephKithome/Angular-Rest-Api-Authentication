import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserData } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class NetworkService {
 
  constructor(private httpClient: HttpClient, private router: Router) { }

  registerUser(_url: string,user: UserData){
    const url = environment.baseUrl + _url
    return this.httpClient.post<any>(url,user)
  }

  doLogin(_url: string, user: UserData){
    const loginUrl =  environment.baseUrl + _url
    return this.httpClient.post<any>(loginUrl,user)
  }

  getEvents(_url: string){
    const eventsUrl= environment.baseUrl + _url
    return this.httpClient.get<any>(eventsUrl);
  }
  getSpecialEvents(_url: string){
    const specialEventsUrl = environment.baseUrl + _url
    return this.httpClient.get<any>(specialEventsUrl);
  }

  //checkIfloggedIn

  isAuthenticated(){
    return !!localStorage.getItem("token");
  }

  // fetch the token from localstorage
  getToken(){
    return localStorage.getItem('token')
  }

  //do logout user
  logout(){
    this.router.navigate(['/events'])
    return localStorage.removeItem('token')

  }
}
