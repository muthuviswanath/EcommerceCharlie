import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../landing-page/components/products/products.component';
import { TopProductsComponent } from '../landing-page/components/top-products/top-products.component';
import { LoginComponent } from '../login-register/components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/topproducts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'topproducts', component: TopProductsComponent },
  { path: 'product', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
