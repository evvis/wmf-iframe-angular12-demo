import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IframeComponent } from './iframe.component';
import { HostLayoutComponent } from 'src/app/app-host-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HostLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'remote1' },
      {
        path: 'remote1',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:5556/remoteEntry.js',
            remoteName: 'wmfRemote1',
            exposedModule: './RootModule',
          }).then((m) => m.RootModule),
      },
      {
        path: 'remote2',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:5557/remoteEntry.js',
            remoteName: 'wmfRemote2',
            exposedModule: './RootModule',
          }).then((m) => m.RootModule),
      },
      { path: 'remote3', component: IframeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
