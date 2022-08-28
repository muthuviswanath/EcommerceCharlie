import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServices } from 'src/app/cart-wishlist/services/cart.services';
import { WishListServices } from 'src/app/cart-wishlist/services/wishlist.services';
import { IProduct } from "../../interfaces/IProduct";
import { ProductServices } from '../../services/product.services';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  productsList: IProduct[];
  items: any = {};
  prodData: any = {};
  model: any = {};
  sub: any;
  id: any;
  fakeArray = new Array(5);

  isBigEnough(element, index, array): any {
    return (element >= 10);
  }

  constructor(private _productServices: ProductServices, private route: ActivatedRoute, private _cartService: CartServices, private _wishListService: WishListServices) {

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      (params) => {
        this.id = params['id'];
      }
    );
    this.prodData = this._productServices.getProductById(this.id).subscribe(
      (response) => {
        this.prodData = response;
      }
    );
    this._productServices.getAllProducts().subscribe(
      (response) => {
        this.productsList = response.filter(
          (element) => {
            element.productDescription == this.prodData.productDescription;
          }
        );
      }
    );
  }

  public submitToCart(): void {
    this.model.productId = this.prodData.productId;
    this.model.cartTotal = this.prodData.productOfferPrice;
    this.model.productName = this.prodData.productName;
    this.model.imgURL = this.prodData.imagePath;
    var userdata= localStorage.getItem('user');
    var obj=JSON.parse(userdata);
    this.model.userId = obj.userId;// to get userId at time of user login using local storage 
    this._cartService.addToCart(this.model).subscribe();
    alert("Added To Cart Successfully");
  }

  // Code Added By Apoorv
  public submitToWishList(): void {
    this.model.productId = this.prodData.productId;
    this.model.userId = 3;
    this._wishListService.addToWishList(this.model).subscribe();
    alert("Added To WishList Successfully");
  }


}
