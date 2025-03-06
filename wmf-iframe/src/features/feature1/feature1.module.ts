import { NgModule } from '@angular/core';
import { Feature1Component } from './feature1.component';
import { feature1Routing } from './feature1-routing.module';
import { Feature1DialogComponent } from './feature1-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [feature1Routing, MatDialogModule, MatButtonModule],
  declarations: [Feature1Component, Feature1DialogComponent]
})
export class Feature1Module {}
