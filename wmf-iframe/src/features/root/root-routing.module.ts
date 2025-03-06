import { RouterModule } from '@angular/router';
import { RootComponent } from './root.component';

export const rootRouting = RouterModule.forChild([
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feature1'
  },
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'feature1',
        loadChildren: () => import('../feature1/feature1.module').then(m => m.Feature1Module)
      }
    ]
  }
]);
