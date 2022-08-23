import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { TopProductsComponent } from './components/top-products/top-products.component';

const routes: Routes = [
  { path: '', redirectTo: '/topproducts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'topproducts', component: TopProductsComponent },
  { path: 'product', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
