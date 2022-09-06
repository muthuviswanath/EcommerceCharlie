import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { IProduct } from '../../interfaces/IProduct';
import { ProductServices } from '../../services/product.services';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  productList: IProduct[];
  exportData: any;

  constructor(private _productServices: ProductServices, private toast: NgToastService, private route: Router) {

  }

  ngOnInit(): void {
    // GET: Subscribing To Get All Products
    this._productServices.getAllProducts().subscribe(
      (response) => {
        this.productList = response;
      }
    );
  }

  // To Update Product Data
  onUpdate(prodData: any) {
    this._productServices.setOptions('productId', prodData);
    this.route.navigate(['/editproduct']);
  }

  // To Delete Product
  onDelete(prodData: any) {
    // DELETE: Subscribing To Delete Product
    this._productServices.deleteProduct(prodData).subscribe();
    this.toast.success({ detail: "SUCCESS", summary: 'Product Deleted Successfully!', duration: 5000 });
    window.location.reload();
  }
}
