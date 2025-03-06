import { Component } from '@angular/core';

@Component({
  selector: 'app-host-layout',
  template: `
    <div class="container">
      <h1>Angular Host app</h1>

      <ul>
        <li routerLinkActive="active"><a routerLink="remote1">Remote 1</a></li>
        <li routerLinkActive="active"><a routerLink="remote2">Remote 2</a></li>
        <li routerLinkActive="active"><a routerLink="remote3">Remote 3</a></li>
      </ul>

      <div class="remotes">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class HostLayoutComponent {}
