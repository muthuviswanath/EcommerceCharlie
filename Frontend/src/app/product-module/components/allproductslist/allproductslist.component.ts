import { Component, OnInit } from '@angular/core';
import { IProduct } from "../../interfaces/IProduct";
import { ProductServices } from '../../services/product.services';

@Component({
  selector: 'app-allproductslist',
  templateUrl: './allproductslist.component.html',
  styleUrls: ['./allproductslist.component.css']
})
export class AllproductslistComponent implements OnInit {

  IProduct: Array<any> = [];
  allproductsList: IProduct[];

  constructor(private _productServices: ProductServices) {

  }

  ngOnInit(): void {
    // GET: Subscribing To Get All Products
    this._productServices.getAllProducts().subscribe(
      (response) => {
        this.allproductsList = response;
      }
    );
  }

}
