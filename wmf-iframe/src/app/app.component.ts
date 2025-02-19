import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppDialogComponent } from './app-dialog.component';
// @ts-ignore
import * as asome from 'wmfHost/hello';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wmf-iframe';

  constructor(private readonly matDialog: MatDialog) {
    console.log('AppComponent  ', asome);
  }

  handleOpenDialog() {
    this.matDialog.open(AppDialogComponent);
  }
}
