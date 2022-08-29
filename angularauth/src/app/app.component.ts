import { Component } from '@angular/core';
import { NetworkService } from './services/network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularauth';

  constructor(public netWorkService: NetworkService){}

  logoutUser(){
    this.netWorkService.logout();
  }
}
