import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {VoteConfirmationDialogComponent} from '../components/vote-confirmation-dialog/vote-confirmation-dialog.component';
import {ProjectsService} from '../projects.service';
import {Project} from '../structs/Project';
import {CommentConfirmationDialogComponent} from '../components/comment-confirmation-dialog/comment-confirmation-dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog, private projectService: ProjectsService) { }

  projects: Project[];

  projects1 = [{
    title: 'Some Project Title',
    teamNumber : 'Team 8125',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet, libero eget scelerisque placerat, ' +
    'lacus ligula ultricies lorem, in malesuada massa neque ' +
    'quis ante. Nunc at eros vel lorem condimentum imperdiet ' +
    'ac et lorem. Nulla ac euismod felis. Nullam porttitor ' +
    'lorem in purus sagittis imperdiet. Praesent a justo nec ' +
    'leo suscipit efficitur eget fermentum purus. Ut eget dolor ipsum. Morbi ' +
    'lobortis condimentum nisi quis malesuada.'
  }, {
    title: 'Project 1',
    teamNumber : 'Team 8125',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet, libero eget scelerisque placerat, ' +
    'lacus ligula ultricies lorem, in malesuada massa neque ' +
    'quis ante. Nunc at eros vel lorem condimentum imperdiet ' +
    'ac et lorem. Nulla ac euismod felis. Nullam porttitor ' +
    'lorem in purus sagittis imperdiet. Praesent a justo nec ' +
    'leo suscipit efficitur eget fermentum purus. Ut eget dolor ipsum. Morbi ' +
    'lobortis condimentum nisi quis malesuada.'
  }, {
    title: 'Project 2',
    teamNumber : 'Team 6125',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet, libero eget scelerisque placerat, ' +
    'lacus ligula ultricies lorem, in malesuada massa neque ' +
    'quis ante. Nunc at eros vel lorem condimentum imperdiet ' +
    'ac et lorem. Nulla ac euismod felis. Nullam porttitor ' +
    'lorem in purus sagittis imperdiet. Praesent a justo nec ' +
    'leo suscipit efficitur eget fermentum purus. Ut eget dolor ipsum. Morbi ' +
    'lobortis condimentum nisi quis malesuada.'
  }, {
    title: 'Project 3',
    teamNumber : 'Team 7125',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet, libero eget scelerisque placerat, ' +
    'lacus ligula ultricies lorem, in malesuada massa neque ' +
    'quis ante. Nunc at eros vel lorem condimentum imperdiet ' +
    'ac et lorem. Nulla ac euismod felis. Nullam porttitor ' +
    'lorem in purus sagittis imperdiet. Praesent a justo nec ' +
    'leo suscipit efficitur eget fermentum purus. Ut eget dolor ipsum. Morbi ' +
    'lobortis condimentum nisi quis malesuada.'
  }];
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
      width: '80%'
    });
  }
}
