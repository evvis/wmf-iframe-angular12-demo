import { RouterModule } from '@angular/router';
import { Feature2Component } from './feature2.component';

export const feature2Routing = RouterModule.forChild([
  {
    path: '',
    pathMatch: 'full',
    component: Feature2Component
  }
])
