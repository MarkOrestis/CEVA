import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Project} from '../../structs/Project';

export interface DialogData {
 project: Project;
}
@Component({
  selector: 'app-vote-confirmation-dialog',
  templateUrl: './vote-confirmation-dialog.component.html',
  styleUrls: ['./vote-confirmation-dialog.component.scss']
})
export class VoteConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<VoteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onCancel(): void {
    this.dialogRef.close();
    }
    onConfirm(): void {
    this.dialogRef.close();
    }
}
