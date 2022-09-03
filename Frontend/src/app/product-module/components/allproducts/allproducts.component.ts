import { Component, OnInit } from '@angular/core';
import { IProduct } from "../../interfaces/IProduct";
import { ProductServices } from '../../services/product.services';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  IProduct: Array<any> = [];
  productsList: IProduct[];

  constructor(private _productServices: ProductServices) {

  }

  ngOnInit(): void {

    // GET: Subscribing To Get All Products
    this._productServices.getAllProducts().subscribe(
      (response) => {
        this.productsList = response;

      }
    );
  }

}
