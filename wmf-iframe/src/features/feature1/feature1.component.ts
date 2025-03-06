import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Feature1DialogComponent } from './feature1-dialog.component';

@Component({
  selector: 'feature1',
  templateUrl: './feature1.component.html',
  styles: [
    `
      h2 {
        color: blue;
      }
    `,
  ],
})
export class Feature1Component {
  constructor(private readonly matDialog: MatDialog) {}

  handleOpenDialog() {
    this.matDialog.open(Feature1DialogComponent);
  }
}
