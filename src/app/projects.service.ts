import { Injectable } from '@angular/core';


import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Subject} from 'rxjs/Subject';
import {Project} from './structs/Project';
import {Expo} from './structs/Expo';
import {ProjectJSON} from './structs/ProjectJSON';
import {MatSnackBar} from '@angular/material';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const configUrl = ' https://juniordesign.herokuapp.com/api/projects';
const expoUrl = ' https://juniordesign.herokuapp.com/api/expositions';

export interface VoteResponse {
  success: string;
}

export interface CommentResponse {
  success: string;
}

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
  expositions: Expo[] = [];
  resp;
  currentExposition: string;
  currentProjects: Subject<Project[]> = new Subject<Project[]>();
  currentExpositions: Subject<Expo[]> = new Subject<Expo[]>();
  currentExpoTag: Subject<String> = new Subject<String>();

  constructor(private http: HttpClient, public snackBar: MatSnackBar) {
    this.currentExposition = 'FALL2018';
  }

  loadProjects() {
    this.http.get(configUrl).subscribe((data) => {
      for (let i = 0; i < data['data'].length; i++) {
        this.projects.push(this.decodeProject(data['data'][i]));
      }
      this.currentProjects.next(this.projects);
    });
  }

  loadExpositions() {
    this.http.get(expoUrl).subscribe((data) => {
      for (let i = 0; i < data['data'].length; i++) {
        this.expositions.push(data['data'][i]);
      }
      this.currentExpositions.next(this.expositions);
      this.currentExpoTag.next(this.getCurrentExpositionTag());
    });
  }

  getExpositions() {
    return this.expositions;
  }

  setCurrentExpoisitionTag(tag) {
    this.currentExposition = tag;
    this.currentExpoTag.next(this.currentExposition);
    if (this.currentExposition != null) {
      this.getCurrExpoProjects();
    }
  }

  isDefined<T>(value: T | undefined | null): value is T {
    return <T>value !== undefined && <T>value !== null;
  }
  getCurrentExpositionTag() {
    return this.currentExposition;
  }

  getCurrExpoProjects() {
    const httpHeaders = new HttpHeaders().set('expo', this.currentExposition);
    this.http.get(configUrl + '/expo', {headers: httpHeaders}).subscribe((data) => {
      this.projects = [];
      for (let i = 0; i < data['data'].length; i++) {
        this.projects.push(this.decodeProject(data['data'][i]));
      }
      this.currentProjects.next(this.projects);
    });
  }

  castVote(teamId) {
    this.http.post<VoteResponse>(configUrl  + '/vote', {teamId: teamId}).subscribe(
      response => {
        if (true) {
          this.snackBar.open('Vote Successfully cast', null, {
            duration: 3000
          });
        }
      }
    );
  }

  addComment(teamId, comment) {
    this.http.post<CommentResponse>(configUrl + '/comment', {teamId : teamId, comment: comment}).subscribe(
      response => {
        if (true) {
          this.snackBar.open('Thank you for your comment', null, {
            duration: 3000
        });
      }}
    );
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
      description: this.des,
      comments: json.comments
    };
  }

  // decodeExpo(json: ProjectJSON): Project {
  //   return {
  //     title: json.name,
  //     teamNumber: json.teamId,
  //     teamMembers: json.teamMembers,
  //     _id: json._id,
  //     description: this.des,
  //     comments: json.comments
  //   };
  // }
}
