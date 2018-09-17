import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {VoteConfirmationDialogComponent} from '../../components/vote-confirmation-dialog/vote-confirmation-dialog.component';
import {ProjectsService} from '../../projects.service';
import {Project} from '../../structs/Project';
import {CommentConfirmationDialogComponent} from '../../components/comment-confirmation-dialog/comment-confirmation-dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog, private projectService: ProjectsService) { }

  projects: Project[];

  ngOnInit() {
    const p = this.projectService.getProjects();
    if (p.length > 1) {
      this.projects = p;
    }
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
