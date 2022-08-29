import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart-wishlist/components/cart/cart.component';
import { OrderhistoryComponent } from '../cart-wishlist/components/orderhistory/orderhistory.component';
import { WishlistComponent } from '../cart-wishlist/components/wishlist/wishlist.component';
import { AddproductComponent } from '../product-module/components/addproduct/addproduct.component';
import { AdminComponent } from '../landing-page/components/admin/admin.component';
import { AllproductsComponent } from '../product-module/components/allproducts/allproducts.component';
import { EditproductComponent } from '../product-module/components/editproduct/editproduct.component';
import { ListproductsComponent } from '../product-module/components/listproducts/listproducts.component';
import { ProductsComponent } from '../product-module/components/products/products.component';
import { SearchResultComponent } from '../landing-page/components/search-result/search-result.component';
import { TopProductsComponent } from '../product-module/components/top-products/top-products.component';
import { LoginComponent } from '../login-register/components/login/login.component';
import { RegisterComponent } from '../login-register/components/register/register.component';
import { AccountComponent } from '../login-register/components/account/account.component';
import { UserComponent } from '../login-register/components/user/user.component';
import { AllproductslistComponent } from '../product-module/components/allproductslist/allproductslist.component';

const routes: Routes = [
  { path: '', redirectTo: '/allproducts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'topproducts', component: TopProductsComponent },
  { path: 'product/:id', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'allproducts', component: AllproductsComponent },
  { path: 'alllistproducts', component: AllproductslistComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'search/:id', component: SearchResultComponent },
  { path: 'order', component: OrderhistoryComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'editproduct', component: EditproductComponent },
  { path: 'listproducts', component: ListproductsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
