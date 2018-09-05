import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: JSON[] = [];
  currentProjects: Subject<JSON[]> = new Subject<JSON[]>();

  constructor(private http: HttpClient) {
  }

  loadProjects() {
    const configUrl = 'http://localhost:8080/api/projects';
    this.http.get(configUrl).subscribe((data) => {
      for (let i = 0; i < data['data'].length; i++) {
        this.projects.push(data['data'][i]);
      }
      this.currentProjects.next(this.projects);
    });
  }

  getProjects() {
    return this.projects;
  }
}
