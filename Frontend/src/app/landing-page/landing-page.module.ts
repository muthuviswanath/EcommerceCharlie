import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductServices } from '../product-module/services/product.services';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { SectionModule } from '../section/section.module';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductModuleModule } from '../product-module/product-module.module';
import { BadgeServices } from '../shared/services/badge.services';


const Components = [HomeComponent, SearchResultComponent, AdminComponent,];
@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    HttpClientModule,
    SectionModule,
    SharedModule,
    ProductModuleModule,
  ],
  providers: [ProductServices,BadgeServices],
  exports: Components,
  schemas: [NO_ERRORS_SCHEMA]
})
export class LandingPageModule { }
