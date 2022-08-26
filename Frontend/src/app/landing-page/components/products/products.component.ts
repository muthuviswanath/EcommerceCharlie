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
  fakeArray= new Array(5);
  
  isBigEnough(element, index, array): any {
    return (element >= 10);
  }

  constructor(private _productServices: ProductServices, private route: ActivatedRoute, private _cartService:CartServices,private _wishListService:WishListServices) {

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.prodData = this._productServices.getProductById(this.id).subscribe(
      res => {
        this.prodData = res;
        
      }
      
    )
    this._productServices.getAllProducts().subscribe(res => {
      this.productsList = res.filter(element => element.productDescription == this.prodData.productDescription);
    }
    );

    
  
  }

  public submitToCart():void{
    this.model.productId = this.prodData.productId;
    this.model.cartTotal = this.prodData.productOfferPrice;
    this.model.userId = 5;
    this._cartService.addToCart(this.model).subscribe();
    alert("Added To Cart Successfully")
  }
  
//code added by apoorv
  public submitToWishList():void{
    this.model.productId = this.prodData.productId;
    this.model.userId=5;
    this._wishListService.addToWishList(this.model).subscribe();
    alert("Added To WishList Successfully")
  }

 
}
