import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Project } from '../../structs/Project';
import {ProjectsService} from '../../projects.service';

@Component({
  selector: 'app-comment-confirmation-dialog',
  templateUrl: './comment-confirmation-dialog.component.html',
  styleUrls: ['./comment-confirmation-dialog.component.scss']
})
export class CommentConfirmationDialogComponent {

  commentInput;

  constructor(
    public dialogRef: MatDialogRef<CommentConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public projectService: ProjectsService) {}

  onCancel(): any {
    this.dialogRef.close();
    return false;
  }

  onSubmit(): any {
    this.projectService.addComment(this.data.project.teamNumber, this.commentInput);
    this.dialogRef.close();
    return false;
  }

}

export interface DialogData {
  project: Project;
}
