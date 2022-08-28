import { Component, OnInit } from '@angular/core';
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

  constructor(private _productServices: ProductServices) {

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
  public onUpdate(prodData: any) {
    this._productServices.setOptions('productId', prodData);
  }

  // To Delete Product
  public onDelete(prodData: any) {
    // DELETE: Subscribing To Delete Product
    this._productServices.deleteProduct(prodData).subscribe(
      () => {

      }
    );
    alert("Product Deleted Successfully");
    window.location.reload();
  }
}
