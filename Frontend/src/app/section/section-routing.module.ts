import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart-wishlist/components/cart/cart.component';
import { OrderhistoryComponent } from '../cart-wishlist/components/orderhistory/orderhistory.component';
import { WishlistComponent } from '../cart-wishlist/components/wishlist/wishlist.component';
import { AdminComponent } from '../landing-page/components/admin/admin.component';
import { AllproductsComponent } from '../landing-page/components/allproducts/allproducts.component';
import { ProductsComponent } from '../landing-page/components/products/products.component';
import { SearchResultComponent } from '../landing-page/components/search-result/search-result.component';
import { TopProductsComponent } from '../landing-page/components/top-products/top-products.component';
import { LoginComponent } from '../login-register/components/login/login.component';
import { RegisterComponent } from '../login-register/components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/allproducts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'topproducts', component: TopProductsComponent },
  { path: 'product/:id', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'allproducts', component: AllproductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'search/:id', component: SearchResultComponent },
  { path: 'order', component: OrderhistoryComponent },
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
