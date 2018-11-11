import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {Project} from '../../structs/Project';
import {VoteConfirmationDialogComponent} from '../vote-confirmation-dialog/vote-confirmation-dialog.component';

export interface DialogData {
  project: Project;
}
@Component({
  selector: 'app-project-map-expo-dialog',
  templateUrl: './project-map-expo-dialog.component.html',
  styleUrls: ['./project-map-expo-dialog.component.scss']
})
export class ProjectMapExpoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VoteConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  ngOnInit() {
  }

}
