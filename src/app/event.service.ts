import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
    this.loadEvents();
  }

  events = [];
  eventsSubject: Subject<any[]> = new Subject<any[]>();

  selectedEvent = '';
  selectedEventSubject: Subject<any> = new Subject<any>();

  amprojects = [];
  amprojectsSubject: Subject<any[]> = new Subject<any[]>();
  pmprojects = [];
  pmprojectsSubject: Subject<any[]> = new Subject<any[]>();

  public loadEvents() {
    this.http.get<any[]>('http://localhost:8080/event/').subscribe((data) => {
      for ( let i = 0; i < data.length; i++) {
        this.events.push(data[i]);
      }
      this.setSelectedEvent(this.events[0]);

      this.eventsSubject.next(this.events);
      this.selectedEventSubject.next(this.selectedEvent);
    });
  }

  public setSelectedEvent(e) {
    const httpHeaders = new HttpHeaders().set('eventid', e.id);
    this.amprojects = [];
    this.pmprojects = [];
    this.http.get<any[]>('http://localhost:8080/event/teams', {headers: httpHeaders}).subscribe((data) => {
      console.log(data);
      for (let j = 0; j < data[0].length; j++) {
        this.amprojects.push(data[0][j]);
      }
      for (let j = 0; j < data[1].length; j++) {
        this.pmprojects.push(data[1][j]);
      }
      this.amprojectsSubject.next(this.amprojects);
      this.pmprojectsSubject.next(this.pmprojects);
    });
    this.selectedEvent = e;
    this.selectedEventSubject.next(this.selectedEvent);
  }

  public getSelectedEvent() {
    return this.selectedEvent;
  }

}
