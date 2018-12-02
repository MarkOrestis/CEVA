import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Project} from '../../structs/Project';
import {ProjectsService} from '../../projects.service';
import {EventService} from '../../event.service';

// export interface DialogData {
//  project: Project;
// }

const key = 'hasVoted';

@Component({
  selector: 'app-vote-confirmation-dialog',
  templateUrl: './vote-confirmation-dialog.component.html',
  styleUrls: ['./vote-confirmation-dialog.component.scss']
})
export class VoteConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<VoteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eventService: EventService) { }

    onCancel(): void {
    this.dialogRef.close();
    }
    onConfirm(): void {
    this.eventService.castVote(this.data.project.id);
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
