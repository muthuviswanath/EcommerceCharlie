import { Component, OnInit } from '@angular/core';
import { IProduct } from "../../interfaces/IProduct";
import { ProductServices } from '../../services/product.services';
import jwtDecode from 'jwt-decode';
import { BadgeServices } from 'src/app/shared/services/badge.services';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  IProduct: Array<any> = [];
  productsList: IProduct[];

  constructor(private _productServices: ProductServices, private _badgeService: BadgeServices) {

  }

  ngOnInit(): void {
    // GET: Subscribing To Get All Products
    this._productServices.getAllProducts().subscribe(
      (response) => {
        this.productsList = response;
        this._productServices.getCartCount().subscribe(
          (badgeresponse) => {
            this._badgeService.cartBadgeCount(badgeresponse?.length);
          }
        );
        
    
      }
    );
  }

}
