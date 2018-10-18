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
  constructor(private projectService: ProjectsService, private eventSvc: EventService) {
    this.selectedEventSubscription = this.eventSvc.selectedEventSubject.subscribe(event => {
      this.selectedEvent = event;
      this.year = event.year;
      this.semester = event.semester;
    });
    this.selectedEvent = this.eventSvc.selectedEvent;
    if (this.selectedEvent) {
      this.year = this.eventSvc.selectedEvent.year;
      this.semester = this.eventSvc.selectedEvent.semester;
    }
  }

  ngOnInit() {

  }



}
