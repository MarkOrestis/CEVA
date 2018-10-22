import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {Observable, of, from } from 'rxjs';

import {map} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class EventService {


  events = [];
  eventsSubject: Subject<any[]> = new Subject<any[]>();

  selectedEvent;
  selectedEventSubject: Subject<any> = new Subject<any>();

  voterViewingSession: string;
  voterViewingSessionSubject: Subject<string> = new Subject<string>();


  url = 'https://juniordesign.herokuapp.com/';
  // url = 'http://localhost:8080/';
  
  amprojects = [];
  amprojectsSubject: Subject<any[]> = new Subject<any[]>();
  pmprojects = [];
  pmprojectsSubject: Subject<any[]> = new Subject<any[]>();
  numam = 0;
  numamsub: Subject<number> = new Subject<number>();
  numpm = 0;
  numpmsub: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient) {
    this.loadEvents();
    this.voterViewingSession = 'am';
    this.voterViewingSessionSubject.next(this.voterViewingSession);
  }



  public loadEvents() {
    this.http.get<any[]>(this.url + 'event/').subscribe((data) => {
      for ( let i = 0; i < data.length; i++) {
        this.events.push(data[i]);
      }
      this.setSelectedEvent(this.events[0]);

      this.eventsSubject.next(this.events);
      this.selectedEventSubject.next(this.selectedEvent);
    });
  }


  changeVoterViewingSession(session) {
    this.voterViewingSession = session;
    this.voterViewingSessionSubject.next(this.voterViewingSession);
  }

  getVoterViewingSession() {
    return this.voterViewingSession;
  }
  getamProjects() {
    return this.amprojects;
  }

  getpmProjects() {
    return this.pmprojects;
  }

  public setSelectedEvent(e) {
    const httpHeaders = new HttpHeaders().set('eventid', e.id);
    this.amprojects = [];
    this.pmprojects = [];
    this.numam = 0;
    this.numpm = 0;
    this.http.get<any[]>(this.url + 'event/teams', {headers: httpHeaders}).subscribe((data) => {
      // console.log(data);
      for (let j = 0; j < data[0].length; j++) {
        this.amprojects.push(data[0][j]);
        this.numam += 1;
      }
      for (let j = 0; j < data[1].length; j++) {
        this.pmprojects.push(data[1][j]);
        this.numpm += 1;
      }
      this.amprojectsSubject.next(this.amprojects);
      this.pmprojectsSubject.next(this.pmprojects);
      this.numamsub.next(this.numam);
      this.numpmsub.next(this.numpm);
    });
    this.selectedEvent = e;
    this.selectedEventSubject.next(this.selectedEvent);
  }

  public getSelectedEvent() {
    return this.selectedEvent;
  }

  public uploadTeams(event) {
    const fileList = event.target.files;
    const file: File = fileList[0];
    const formData: FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    formData.append('eventid', this.selectedEvent.id);
    formData.append('amsession', this.selectedEvent.amsession);
    formData.append('pmsession', this.selectedEvent.pmsession);
    this.http.post(this.url + 'event/teams', formData)
    .map(res => res)
    .catch(error => Observable.throw(error))
    .subscribe(
        data => {
          console.log('success');
          this.setSelectedEvent(this.selectedEvent);
        }
        ,
        error => console.log(error)
    );
    // this.http.post<any>('http://localhost:8080/event/teams', fileList[0]).subscribe((data) => {
    //   console.log(data);
    // });
  }

}
