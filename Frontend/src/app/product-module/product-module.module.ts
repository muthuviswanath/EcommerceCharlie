import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { ListproductsComponent } from './components/listproducts/listproducts.component';
import { ProductsComponent } from './components/products/products.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AllproductslistComponent } from './components/allproductslist/allproductslist.component';

const Components = [AddproductComponent, AllproductsComponent, EditproductComponent, ListproductsComponent, ProductsComponent, TopProductsComponent, AllproductslistComponent];

@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    ProductModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: Components,
})
export class ProductModuleModule { }
