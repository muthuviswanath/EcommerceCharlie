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
    this._productServices.getAllProducts().subscribe(
      (response) => {
        this.productList = response;
      }
    );
  }

  public onUpdate(prodData: any) {
    this._productServices.setOptions('productId', prodData);
  }

  public onDelete(prodData: any) {
    this._productServices.deleteProduct(prodData).subscribe(
      () => {

      }
    );
    alert("Product Deleted Successfully");
    window.location.reload();
  }
}
