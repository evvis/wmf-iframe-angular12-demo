import { Component } from '@angular/core';

@Component({
  selector: 'feature1',
  template: '<h2>Feature1 from Remote app 1</h2>',
  styles: [
    `
      h2 { color: green; }
    `
  ]
})
export class Feature1Component {}
