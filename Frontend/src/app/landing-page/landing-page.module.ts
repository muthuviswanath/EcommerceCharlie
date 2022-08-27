import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { ProductServices } from './services/product.services';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { SectionModule } from '../section/section.module';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { CartWishlistModule } from '../cart-wishlist/cart-wishlist.module';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

const Components = [HomeComponent, ProductsComponent, TopProductsComponent, AllproductsComponent, SearchResultComponent, AdminComponent, AddproductComponent]
@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    HttpClientModule,
    SectionModule,
    SharedModule,
    CartWishlistModule
  ],
  providers: [ProductServices],
  exports: Components,
  schemas: [NO_ERRORS_SCHEMA]
})
export class LandingPageModule { }
