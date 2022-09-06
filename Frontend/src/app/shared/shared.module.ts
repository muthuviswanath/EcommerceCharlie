import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { UppernavComponent } from './components/header/uppernav/uppernav.component';
import { LowernavComponent } from './components/header/lowernav/lowernav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { navchangeservice } from './services/navchange.service';
import { BadgeServices } from './services/badge.services';





const Components = [HeaderComponent, FooterComponent, UppernavComponent, LowernavComponent, CardsComponent];

@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [navchangeservice, BadgeServices],
  exports: Components
})
export class SharedModule { }
