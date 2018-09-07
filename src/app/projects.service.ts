import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {Project} from './structs/Project';
import {ProjectJSON} from './structs/ProjectJSON';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  des = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet, libero eget scelerisque placerat, ' +
    'lacus ligula ultricies lorem, in malesuada massa neque ' +
    'quis ante. Nunc at eros vel lorem condimentum imperdiet ' +
    'ac et lorem. Nulla ac euismod felis. Nullam porttitor ' +
    'lorem in purus sagittis imperdiet. Praesent a justo nec ' +
    'leo suscipit efficitur eget fermentum purus. Ut eget dolor ipsum. Morbi ' +
    'lobortis condimentum nisi quis malesuada.';

  projects: Project[] = [];
  currentProjects: Subject<Project[]> = new Subject<Project[]>();

  constructor(private http: HttpClient) {
  }

  loadProjects() {
    const configUrl = ' http://juniordesign.herokuapp.com/api/projects';
    this.http.get(configUrl).subscribe((data) => {
      for (let i = 0; i < data['data'].length; i++) {
        this.projects.push(this.decodeProject(data['data'][i]));
      }
      this.currentProjects.next(this.projects);
    });
  }

  getProjects() {
    return this.projects;
  }

  decodeProject(json: ProjectJSON): Project {
    return {
      title: json.name,
      teamNumber: json.teamId,
      teamMembers: json.teamMembers,
      _id: json._id,
      description: this.des
    };
  }
}
