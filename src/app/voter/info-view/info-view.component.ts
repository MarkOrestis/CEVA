import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.scss']
})
export class InfoViewComponent implements OnInit {



  selectedEventSubscription: Subscription;
  selectedEvent = {};


  constructor(private eventSvc: EventService) {
    this.selectedEventSubscription = this.eventSvc.selectedEventSubject.subscribe(event => {
      this.selectedEvent = event;
    });
    this.selectedEvent = this.eventSvc.getSelectedEvent();
  }

  ngOnInit() {
  }

}
