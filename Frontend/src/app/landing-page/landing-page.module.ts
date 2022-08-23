import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { ProductServices } from './services/product.services';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SectionModule } from '../section/section.module';

const Components = [HomeComponent, ProductsComponent, TopProductsComponent]
@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,
    HttpClientModule,
    SectionModule
  ],
  providers: [ProductServices],
  exports: Components,
  schemas:[NO_ERRORS_SCHEMA]
})
export class LandingPageModule { }
