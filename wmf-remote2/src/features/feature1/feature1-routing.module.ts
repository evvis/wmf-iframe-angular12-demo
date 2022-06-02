import { RouterModule } from '@angular/router';
import { Feature1Component } from './feature1.component';

export const feature1Routing = RouterModule.forChild([
  {
    path: '',
    pathMatch: 'full',
    component: Feature1Component
  }
])
