import { NgModule } from '@angular/core';
import { feature2Routing } from './feature2-routing.module';
import { Feature2Component } from './feature2.component';

@NgModule({
  imports: [feature2Routing],
  declarations: [Feature2Component]
})
export class Feature2Module {}
