import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent {
onMouseOut($event: MouseEvent) {
throw new Error('Method not implemented.');
}
onMouseOver($event: MouseEvent) {
throw new Error('Method not implemented.');
}

   constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}


  }
