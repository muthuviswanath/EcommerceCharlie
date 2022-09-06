import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ProductServices } from 'src/app/product-module/services/product.services';
import { BadgeServices } from 'src/app/shared/services/badge.services';
import { ICart } from '../../interfaces/ICart';
import { CartServices } from '../../services/cart.services';
import { OrderServices } from '../../services/order.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
  
  cartList: ICart[];
  filteredList: ICart[];
  cartData: any = {};
  productData: any = {};
  totalCartPrice: number = 0;
  cartcount:number=0;

  // To get User ID At The Time Of User Login Using Session Storage
  userID = sessionStorage.getItem('userID');
 

  constructor(private _cartService: CartServices,private route: Router, private _orderService: OrderServices, private _productService: ProductServices, private toast: NgToastService, private _badgeService: BadgeServices) {

  }

  ngOnInit(): void {
    this.loadCartData();
  }

  // To Update Cart
  updateCart() {
    // PUT: Subscribing To Update Cart Data
    this._cartService.updateCartData(this.cartData.cartId, this.cartData).subscribe();
  }

  // To Update Product
  updateProduct() {
    // PUT: Subscribing To Update Product By Product ID
    this._productService.updateProduct(this.productData.productId, this.productData).subscribe();
  }

  // To Increment Quantity Of Cart Item
  incrementItem(cartid: any) {
    // GET: Subscribing To Get Cart Item By Cart ID
    this._cartService.getCartById(cartid).subscribe(
      (response) => {
        this.cartData = response;
        this.cartData.cartTotal++;
        this.updateCart();
        // GET: Subscribing To Get Product By Product ID
        this._productService.getProductById(this.cartData.productId).subscribe(
          (response) => {
            this.productData = response;
            this.productData.quantity--;
            if (this.productData.quantity < 0) {
              this.productData.quantity = 0;
              this.toast.warning({ detail: "WARN", summary: 'Not Enough Products!', duration: 5000 });
            }
            this.updateProduct();
          }
        );
      }
    );
    window.location.reload();
  }

  // To Decrement Quantity Of Cart Item
  decrementItem(cartId: any) {
    let flag: Boolean = true;
    console.log(cartId);
    console.log("hello");
    // GET: Subscribing To Get Cart Item By Cart ID
    this._cartService.getCartById(22).subscribe(
      (response) => {
        console.log(response);
        this.cartData = response;
        this.cartData.cartTotal--;
        if (this.cartData.cartTotal < 0) {
          this.cartData.cartTotal = 0;
          this.toast.warning({ detail: "WARN", summary: "Cart Quantity can't be Negative!", duration: 5000 });
          flag = false;
        }
        // GET: Subscribing To Get Product By Product ID
        this._productService.getProductById(this.cartData.productId).subscribe(
          (response) => {
            this.productData = response;
            this.productData.quantity++;
            if (flag) {
              this.updateProduct();
            }
          }
        );
        this.updateCart();
      }
    );
    window.location.reload();
  }

  // To Remove Cart Item
  removeItem(cartId: any) {
    // GET: Subscribing To Get Cart Item By Cart ID
    for (let i = 0; i < this.cartList.length; i++) {
      if(this.cartList[i].cartId==cartId){
        this.cartList.splice(i,1);
      console.log ("Block statement execution no." + i);
      }
    }
    this._badgeService.cartBadgeCount(this.cartList.length);
  }

  // To Update Cart Total
  updateCarttotal(price: number) {
    this.totalCartPrice += price;
  }
  // To Load Cart Data
  loadCartData() {
    this.totalCartPrice = 0;
    // GET: Subscribing To Get All Cart Items By User ID
    this._cartService.getIndiviualCartId().subscribe(
      (response) => {
        this.cartList = response;
        this.cartcount=this.cartList.length;
        this._badgeService.cartBadgeCount(this.cartcount);
        for (let item of this.cartList) {
          this.totalCartPrice += (item.cartTotal * item.cartProductPrice);
        }
      }
    );
  }

  // To Purchase Cart Products
  purchase() {
    for (let item of this.cartList) {
      var orderData = {
        userId: this.userID,
        productId: item.productId,
        orderDate: new Date(),
        productName: item.productName,
        productOfferPrice: item.cartProductPrice,
        imgURL: item.imgURL,
      };
      // POST: Subscribing To Add Cart Item To Order History
      this._orderService.addToOrderHistory(orderData).subscribe();
      // DELETE: Subscribing To Delete Cart Item
      this._cartService.deleteCartData(item.cartId).subscribe(()=>{
        this.route.navigate(["/order"]);
      });
    }
  }
}

