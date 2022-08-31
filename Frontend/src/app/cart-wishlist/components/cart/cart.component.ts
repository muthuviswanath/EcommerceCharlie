import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ProductServices } from 'src/app/product-module/services/product.services';
import { ICart } from '../../interfaces/ICart';
import { CartServices } from '../../services/cart.services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  cartList: ICart[];
  cartData: any = {};
  productData: any = {};
  totalCartPrice: number = 0;
  filteredList: ICart[];

  constructor(private _cartService: CartServices, private _productService: ProductServices, private toast: NgToastService) {

  }

  ngOnInit(): void {
    this.loadCartData();
  }

  // To Update Cart
  public updateCart() {
    // PUT: Subscribing To Update Cart Data
    this._cartService.updateCartData(this.cartData.cartId, this.cartData).subscribe();
    this.loadCartData();
  }

  // To Update Product
  public updateProduct() {
    // PUT: Subscribing To Update Product by Product ID
    this._productService.updateProduct(this.productData.productId, this.productData).subscribe();
  }

  // To Increment Quantity of Cart Item
  public incrementItem(cartid: any) {
    // GET: Subscribing To Get Cart Item by Cart ID
    this._cartService.getCartById(cartid).subscribe(
      (response) => {
        this.cartData = response;
        this.cartData.cartTotal++;
        this.updateCart();
        // GET: Subscribing To Get Product by Product ID
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

  // To Decrement Quantity of Cart Item
  public decrementItem(cartId: any) {
    let flag: Boolean = true;
    // GET: Subscribing To Get Cart Item by Cart ID
    this._cartService.getCartById(cartId).subscribe(
      (response) => {
        this.cartData = response;
        this.cartData.cartTotal--;
        if (this.cartData.cartTotal < 0) {
          this.cartData.cartTotal = 0;
          this.toast.warning({ detail: "WARN", summary: "Cart Quantity can't be Negative!", duration: 5000 });
          flag = false;
        }
        // GET: Subscribing To Get Product by Product ID
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
  public removeItem(cartId: any) {
    // GET: Subscribing To Get Cart Item by Cart ID
    this._cartService.getCartById(cartId).subscribe(
      (response) => {
        this.cartData = response;
        // GET: Subscribing To Product by Product ID
        this._productService.getProductById(this.cartData.productId).subscribe(
          (response) => {
            this.productData = response;
            this.productData.quantity += this.cartData.cartTotal;
            this.updateProduct();
          }
        );
      }
    );

    // DELETE: Subscribing To Delete Cart Item
    this._cartService.deleteCartData(cartId).subscribe();
    this.toast.success({ detail: "SUCCESS", summary: 'Cart Item Removed Successfully!', duration: 5000 });
    window.location.reload();
  }

  // Load Cart Data
  public loadCartData() {
    this.totalCartPrice = 0;
    // GET: Subscribing To Get All Cart Items By User ID
    this._cartService.getIndiviualCartId().subscribe(
      (response) => {
        this.cartList = response;
        for (let item of this.cartList) {
          this.totalCartPrice += (item.cartTotal * item.cartProductPrice);
        }
      }
    );
  }
}

