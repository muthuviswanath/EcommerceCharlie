import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartWishlistRoutingModule } from './cart-wishlist-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { OrderhistoryComponent } from './components/orderhistory/orderhistory.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HttpClientModule } from '@angular/common/http';
import { CartServices } from './services/cart.services';
import { WishListServices } from './services/wishlist.services';
import { OrderServices } from './services/order.services';
import { CartelementComponent } from './components/cartelement/cartelement.component';


const Components = [CartComponent, OrderhistoryComponent, WishlistComponent,CartelementComponent]
@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    CartWishlistRoutingModule,
    HttpClientModule
  ],
  exports: Components,
  providers: [CartServices, WishListServices, OrderServices],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CartWishlistModule { }
