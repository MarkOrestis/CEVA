import { Component, OnInit } from '@angular/core';
import { Project } from '../../structs/Project';
import { ProjectsService } from '../../projects.service';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs';
import { EventService } from '../../event.service';

import * as XLSX from 'xlsx';


@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.scss']
})


export class AddProjectsComponent implements OnInit {


  afuConfig = {
    uploadAPI: {
      url: 'https://example-file-upload-api'
    }
  };
  data;

  projectsSubscription: Subscription;

  // projects: Project[] = [];
  projectColumns: string[] = ['number', 'section', 'session', 'name'];

  amprojects = [];
  amprojectsSubscription: Subscription;
  pmprojects = [];
  pmprojectsSubscription: Subscription;

  selectedEvent;
  selectedEventSubscription: Subscription;

  projects = [];

  constructor(private projectService: ProjectsService, private eventSvc: EventService) {
    this.amprojectsSubscription = this.eventSvc.amprojectsSubject.subscribe(projects => {
      this.amprojects = [];
      for ( const e of projects) {
        this.amprojects.push(e);
      }
    });
    this.pmprojectsSubscription = this.eventSvc.pmprojectsSubject.subscribe(projects => {
      this.pmprojects = [];
      for ( const e of projects) {
        this.pmprojects.push(e);
      }
    });
    this.selectedEventSubscription = this.eventSvc.selectedEventSubject.subscribe(event => {
      this.selectedEvent = event;
    });
    this.amprojects = this.eventSvc.amprojects;
    this.pmprojects = this.eventSvc.pmprojects;
   }

  ngOnInit() {
  }


  fileChosen(evt) {
    this.eventSvc.uploadTeams(evt);
  }
}
