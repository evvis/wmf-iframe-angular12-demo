import { NgModule } from '@angular/core';
import { Feature1Component } from './feature1.component';
import { feature1Routing } from './feature1-routing.module';

@NgModule({
  imports: [feature1Routing],
  declarations: [Feature1Component]
})
export class Feature1Module {}
