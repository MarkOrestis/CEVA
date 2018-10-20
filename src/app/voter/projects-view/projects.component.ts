import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {VoteConfirmationDialogComponent} from '../../components/vote-confirmation-dialog/vote-confirmation-dialog.component';
import {ProjectsService} from '../../projects.service';
import {Project} from '../../structs/Project';
import {CommentConfirmationDialogComponent} from '../../components/comment-confirmation-dialog/comment-confirmation-dialog.component';
import { EventService } from '../../event.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  amprojectsSubscription: Subscription;
  amprojects = [];
  pmprojectsSubscription: Subscription;
  pmprojects = [];

  projects: Project[];
  constructor(public dialog: MatDialog, private projectService: ProjectsService, private evtSvc: EventService) {

    this.amprojectsSubscription = this.evtSvc.amprojectsSubject.subscribe(amprojs => {
      this.amprojects = amprojs;
    });
    this.pmprojectsSubscription = this.evtSvc.pmprojectsSubject.subscribe(pmprojs => {
      this.amprojects = pmprojs;
    });
  }
  ngOnInit() {
    this.amprojects = this.evtSvc.getamProjects();
    this.pmprojects = this.evtSvc.getpmProjects();
  }

  castVote(project): void {
    const dialogRef = this.dialog.open(VoteConfirmationDialogComponent, {
      data: {project: project}
    });
  }

  comment(project): void {
    const dialogRef = this.dialog.open(CommentConfirmationDialogComponent, {
      data: {project: project},
      width: '75%'
    });
  }

  displayComments(project): boolean {
    return project.comments.length > 0;
  }
}
