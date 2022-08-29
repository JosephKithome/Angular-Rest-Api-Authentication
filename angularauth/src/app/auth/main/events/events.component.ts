import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/events';
import { NetworkService } from 'src/app/services/network.service';
import { Api } from 'src/app/utils/api';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})


export class EventsComponent implements OnInit {
  events: Events[] = []
  constructor(private netWorkService: NetworkService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(){
    this.netWorkService.getEvents(Api.eventsUrl)
    .subscribe(response => {

      this.events = response
    })

              
    
  }

}
