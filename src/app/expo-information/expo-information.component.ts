import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Subscription } from 'rxjs/Subscription';
import { EventService } from '../event.service';


@Component({
  selector: 'app-expo-information',
  templateUrl: './expo-information.component.html',
  styleUrls: ['./expo-information.component.scss']
})
export class ExpoInformationComponent implements OnInit {

  selectedEvent = {};
  selectedEventSubscription: Subscription;
  year = '';
  semester = '';
  numam;
  numamEventSubscription: Subscription;
  numpm;
  numpmEventSubscription: Subscription;
  constructor(private projectService: ProjectsService, private eventSvc: EventService) {
    this.selectedEventSubscription = this.eventSvc.selectedEventSubject.subscribe(event => {
      this.selectedEvent = event;
      this.year = event.year;
      this.semester = event.semester;
    });
    this.numamEventSubscription = this.eventSvc.numamsub.subscribe(n => {
      this.numam = n;
    });
    this.numpmEventSubscription = this.eventSvc.numpmsub.subscribe(n => {
      this.numpm = n;
    });
    this.selectedEvent = this.eventSvc.selectedEvent;
    if (this.selectedEvent) {
      this.year = this.eventSvc.selectedEvent.year;
      this.semester = this.eventSvc.selectedEvent.semester;
    }
    this.numam = eventSvc.numam;
    this.numpm = eventSvc.numpm;
  }

  ngOnInit() {

  }



}
