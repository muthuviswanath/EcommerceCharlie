import { Component, OnInit } from '@angular/core';
import { BadgeServices } from 'src/app/shared/services/badge.services';
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
  start: any = 0;
  sortedProductsList: IProduct[];
  constructor(private _productServices: ProductServices) {

  }

  // To Sort By Ascending Price
  sortasc() {
    this.sortedProductsList = this.allproductsList.sort((a, b) => (a.productOfferPrice < b.productOfferPrice ? -1 : 1));
  }

  // To Sort By Descending Price
  sortdesc() {
    this.sortedProductsList = this.allproductsList.sort((a, b) => (a.productOfferPrice > b.productOfferPrice ? -1 : 1));
  }

  ngOnInit(): void {
    // GET: Subscribing To Get All Products
    this._productServices.getAllProducts().subscribe(
      (response) => {
        this.allproductsList = response;
      
      }
    );
  }

  // To Get Next List Of Products
  forward(): void {
    if (this.start < this.allproductsList.length - 4)
      this.start += 4;
  }

  // To Get Previous List Of Produicts
  backward(): void {
    if (this.start > 0)
      this.start -= 4;
  }
}
