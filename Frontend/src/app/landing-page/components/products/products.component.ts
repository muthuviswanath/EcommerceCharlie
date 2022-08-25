import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServices } from 'src/app/cart-wishlist/services/cart.services';
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

  isBigEnough(element, index, array): any {
    return (element >= 10);
  }

  constructor(private _productServices: ProductServices, private route: ActivatedRoute, private _cartService:CartServices) {

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.prodData = this._productServices.getProductById(this.id).subscribe(
      res => {
        this.prodData = res
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
    this.model.userId = 3;
    this._cartService.addToCart(this.model).subscribe();
    alert("Added To Cart Successfully")
  }
}
