import { Component } from '@angular/core';
// @ts-ignore
// import * as asome from 'wmfHost/hello';

@Component({
  selector: 'app-dialog',
  template: 'This dialog was opened from the iframe',
})
export class AppDialogComponent {
  constructor() {
    // console.log('TUT  ', asome);
  }
}
