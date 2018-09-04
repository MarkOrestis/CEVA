import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Subject} from 'rxjs/Subject';

import { ProjectsService } from '../projects.service';


@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {


  currentProjectsSubscription: Subscription;
  projects: JSON[] = [];

  constructor(public projectService: ProjectsService) {

    this.projects = projectService.getProjects();
    this.currentProjectsSubscription = projectService.currentProjects.subscribe((value) => {
      this.projects = value;
    });
  }

  ngOnInit() {
    // console.log(this.projects);
  }


}
