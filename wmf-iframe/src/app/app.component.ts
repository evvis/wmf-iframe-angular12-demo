import { Component } from '@angular/core';
import { Grid } from '@ag-grid-community/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wmf-iframe';

  constructor() {
    console.log('Grid', Grid);
  }
}
