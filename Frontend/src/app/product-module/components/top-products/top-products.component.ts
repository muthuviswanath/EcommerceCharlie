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
  sortedProductsList: IProduct[];
  start: number = 0;

  constructor(private _productServices: ProductServices) {

  }

  ngOnInit(): void {
    // GET: Subscribing To Get All Products
    this._productServices.getAllProducts().subscribe(
      (response) => {
        this.productsList = response.filter(
          element => (element.productRating >= 4)
        );
        this.sortedProductsList = this.productsList;
      }
    );
  }

  // To Sort By Ascending Price
  sortasc() {
    this.sortedProductsList = this.productsList.sort((a, b) => (a.productOfferPrice < b.productOfferPrice ? -1 : 1));
  }

  // To Sort By Descending Price
  sortdesc() {
    this.sortedProductsList = this.productsList.sort((a, b) => (a.productOfferPrice > b.productOfferPrice ? -1 : 1));
  }

  // To Get Next List Of Products
  forward(): void {
    if (this.start < this.productsList.length - 4)
      this.start += 4;
  }

  // To Get Previous List Of Produicts
  backward(): void {
    if (this.start > 0)
      this.start -= 4;
  }
}
