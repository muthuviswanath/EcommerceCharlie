import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServices } from '../../services/product.services';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  prodData: any = {};

  constructor(private _productServices: ProductServices, private route: Router) {
    let prodRecord = this._productServices.getOptions();
    // GET: Subscribing To Get Product By Product ID
    this._productServices.getProductById(prodRecord.productId).subscribe(
      (response) => {
        this.prodData = response;
      }
    )
  }

  ngOnInit(): void {

  }

  // To Edit Product
  public editProductData() {
    // PUT: Subscribing To Edit Product Data
    this._productServices.updateProduct(this.prodData.productId, this.prodData).subscribe(
      () => {

      }
    );
    alert("Product Updated Successfully");
    this.route.navigateByUrl('/listproducts');
  }

}
