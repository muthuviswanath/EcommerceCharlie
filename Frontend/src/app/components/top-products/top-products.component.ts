import { Component, OnInit } from '@angular/core';
import { IProduct } from "../../interfaces/IProduct";
import { ProductServices } from '../../services/product.services';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {


  IProduct: Array<any> = [];
  productsList: IProduct[];
  constructor(private _productServices: ProductServices) {

  }
  ngOnInit(): void {
    this._productServices.getAllProducts().subscribe(
      res => this.productsList = res
    );        // without subscribe will not be able to access.
  }
}
