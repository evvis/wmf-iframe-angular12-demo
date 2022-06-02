import { NgModule } from '@angular/core';
import { RootComponent } from './root.component';
import { rootRouting } from './root-routing.module';

@NgModule({
  imports: [rootRouting],
  declarations: [RootComponent],
})
export class RootModule {}
