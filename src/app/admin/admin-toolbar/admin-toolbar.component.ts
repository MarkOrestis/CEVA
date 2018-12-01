import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Subscription } from 'rxjs/Subscription';

import { EventService } from '../../event.service';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.scss']
})
export class AdminToolbarComponent implements OnInit {
  selected = 'option2';
  cities = [];


  events = [];
  eventsSubscription: Subscription;

  selectedEvent;
  selectedEventSubscription: Subscription;


  dataModel = [];

  expositions = [];
  eventNames = [];


  config = {
    displayKey: 'description',
    search: true,
    height: 'auto',
    placeholder: 'Select',
    customComparator: () => {},
    limitTo: 50
  };




  constructor(private eventSvc: EventService) {
    this.eventsSubscription = this.eventSvc.eventsSubject.subscribe( events => {
      for (const e of events) {
        this.events.push(e);
      }
    });

    this.selectedEventSubscription = this.eventSvc.selectedEventSubject.subscribe(event => {
      this.selectedEvent = event;
      // console.log(this.selectedEvent);
    });

  }

  clickedMenuItem(stuff) {
    this.eventSvc.setSelectedEvent(stuff);
  }




  ngOnInit() {

  }
}
