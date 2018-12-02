import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Project} from '../../structs/Project';
import {ProjectsService} from '../../projects.service';

export interface DialogData {
 project: Project;
}

const key = 'hasVoted';

@Component({
  selector: 'app-vote-confirmation-dialog',
  templateUrl: './vote-confirmation-dialog.component.html',
  styleUrls: ['./vote-confirmation-dialog.component.scss']
})
export class VoteConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<VoteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private projectService: ProjectsService) { }

    onCancel(): void {
    this.dialogRef.close();
    }
    onConfirm(): void {
    this.projectService.castVote(this.data.project.teamNumber);
    localStorage.setItem(key, 'true');
    this.dialogRef.close();
    }
    hasVoted(): boolean {
      const response = localStorage.getItem(key);
      if (response == null) {
        return true;
      } else if (response === 'true') {
        return false;
      }
      return true;
    }
    resolved(response) {
      console.log(JSON.stringify(response));
    }
}
