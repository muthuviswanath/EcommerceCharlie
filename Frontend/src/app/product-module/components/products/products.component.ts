import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
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
  cartData: any = {};
  cartDTOData: any = {};
  wishListData: any = {};
  ListData: any = {};
  sub: any;
  id: any;
  fakeArray = new Array(5);
  discountprice: any;
  // To get User ID at time of user Login using Local Storage
  userdata = localStorage.getItem('user');
  obj = JSON.parse(this.userdata);

  isBigEnough(element): any {
    return (element >= 10);
  }

  constructor(private _productServices: ProductServices, private activatedRoute: ActivatedRoute, private _cartService: CartServices, private _wishListService: WishListServices, private route: Router, private toast: NgToastService) {

  }

  ngOnInit(): void {
    // Getting Product ID from URL
    this.sub = this.activatedRoute.params.subscribe(
      (params) => {
        this.id = params['id'];
      }
    );

    // GET: Subscribing To Get Product By Product ID
    this._productServices.getProductById(this.id).subscribe(
      (response) => {
        this.prodData = response;
        this.discountprice = 100 - Math.round((this.prodData.productOfferPrice / this.prodData.price) * 100);
      }
    );
    // GET: Subscribing To Get All Products then Filtering them using Product Description to Get Related Products
    this._productServices.getAllProducts().subscribe(
      response =>
        this.productsList = response.filter(
          element => element.productDescription == this.prodData.productDescription
        )

    );
  }

  // To Add Product To Cart
  public submitToCart(): void {
    if (this.obj == null) {
      this.toast.error({ detail: "ERROR", summary: 'Please Login First!', duration: 5000 });
      this.route.navigateByUrl('/login');
    }
    else {
      this._cartService.getCartByProductId(this.prodData.productId).subscribe(
        (response) => {
          this.cartDTOData = response;
          if (this.cartDTOData != null) {
            this.cartDTOData.cartTotal += 1;
            this._cartService.updateCartData(this.cartDTOData.cartId, this.cartDTOData).subscribe();
          }
          else {
            this.cartDTOData = {
              userId: this.obj.userId,
              productId: this.prodData.productId,
              cartTotal: 1,
              productName: this.prodData.productName,
              cartProductPrice: this.prodData.productOfferPrice,
              imgURL: this.prodData.imagePath,
            };
            // POST: Subscribing To Add Product To Cart
            this._cartService.addToCart(this.cartDTOData).subscribe();
          }
        }
      );
      // GET: Subscribing To Get Cart Item By Product ID

      this.prodData.quantity--;
      // PUT: Subscribing To Update Product By Product ID
      this._productServices.updateProduct(this.prodData.productId, this.prodData).subscribe();
      this.toast.success({ detail: "SUCCESS", summary: 'Added To Cart Successfully', duration: 5000 });
      this.route.navigateByUrl('/cart').then(
        () => {
          window.location.reload();
        }
      );
    }

  }

  // To Add Product To Wishlist
  // Code Added By Apoorv
  public submitToWishList(): void {

    if (this.obj == null) {
      this.toast.error({ detail: "ERROR", summary: 'Please Login First!', duration: 5000 });
      this.route.navigateByUrl('/login');
    }
    else {
      this.wishListData.productId = this.prodData.productId;
      this.wishListData.userId = this.obj.userId;

      // POST: Subscrbing To Add Product To Wishlist
      // this._wishListService.addToWishList(this.wishListData).subscribe();
      // alert("Added To WishList Successfully");
      // this.route.navigateByUrl('/wishlist')


      // code to restrict user for adding dupilcate product to wishlist.
      this._wishListService.getIndiviualwishListById().subscribe((res) => {
        this.ListData = res;
        console.log(res);
        let flag = 0;
        for (let i = 0; i < this.ListData.length; i++) {
          if (this.wishListData.productId == this.ListData[i].productId) {
            flag = 1;
            this.toast.warning({ detail: "WARN", summary: 'the product is already in your wishList', duration: 5000 });
            break;
          }
        }
        if (flag == 0) {
          //code for adding product to wishlist if its not present earlier
          this._wishListService.addToWishList(this.wishListData).subscribe(data => {
            this.toast.success({ detail: "SUCCESS", summary: 'Added To WishList Successfully', duration: 5000 });
            this.route.navigateByUrl('/wishlist');
          });
        }
      });
    }

  }

}
