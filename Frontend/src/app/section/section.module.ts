import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { BodyComponent } from './components/body/body.component';

const Components = [BodyComponent];
@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    SectionRoutingModule,
  ],
  exports: Components
})
export class SectionModule { }
