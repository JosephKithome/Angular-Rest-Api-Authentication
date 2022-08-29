import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/events';
import { NetworkService } from 'src/app/services/network.service';
import { Api } from 'src/app/utils/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-specialevents',
  templateUrl: './specialevents.component.html',
  styleUrls: ['./specialevents.component.css']
})
export class SpecialeventsComponent implements OnInit {
  specialEvents: Events[] = []
  constructor(private netWorkService: NetworkService, private router: Router) { }

  ngOnInit(): void {
    this.getSpecialEvents()
  }


  //get special events
  getSpecialEvents(){
    this.netWorkService.getSpecialEvents(Api.specialEventsUrl)
    .subscribe(response =>{
      this.specialEvents = response
    }, error=>{
      if(error instanceof HttpErrorResponse){
        if(error.status ===401){

          this.router.navigate(['/login'])
        }
      }
    })
  }

}
