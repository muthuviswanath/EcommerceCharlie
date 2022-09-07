import { Component, Input, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ProductServices } from 'src/app/product-module/services/product.services';
import { ICart } from '../../interfaces/ICart';
import { CartServices } from '../../services/cart.services';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cartelement',
  templateUrl: './cartelement.component.html',
  styleUrls: ['./cartelement.component.css']
})

export class CartelementComponent implements OnInit {

  @Input() item: ICart;
  @Output() newItemEvent = new EventEmitter<number>();
  @Output() removiedId = new EventEmitter<number>();
  cartData: any = {};
  productData: any = {};
  quantity: number = 0;


  constructor(private _cartService: CartServices, private _productService: ProductServices, private toast: NgToastService) {

  }

  ngOnInit(): void {
    this.quantity = this.item.cartTotal;

  }

  // To Update Product
  updateProduct() {
    // PUT: Subscribing To Update Product by Product ID
    this._productService.updateProduct(this.productData.productId, this.productData).subscribe();
  }

  // To Update Cart
  updateCart() {
    // PUT: Subscribing To Update Cart Data
    this._cartService.updateCartData(this.cartData.cartId, this.cartData).subscribe();
  }
  // To Increment Quantity Of Cart Item
  incrementItem(cartid: any) {
    // GET: Subscribing To Get Cart Item by Cart ID
    this._cartService.getCartById(cartid).subscribe(
      (response) => {
        this.cartData = response;
        // GET: Subscribing To Get Product by Product ID
        this._productService.getProductById(this.cartData.productId).subscribe(
          (response) => {
            this.productData = response;
            this.productData.quantity--;
            if (this.productData.quantity < 0) {
              this.productData.quantity = 0;
              this.toast.warning({ detail: "WARN", summary: 'Not Enough Products!', duration: 5000 });
            }
            else {
              this.cartData.cartTotal++;
              this.updateCart();
              this.updateProduct();
              this.newItemEvent.emit(this.item.cartProductPrice);
              this.quantity++;
            }
          }
        );
      }
    );
    
  }
  // To Decrement Quantity Of Cart Item
  decrementItem(cartId: any) {
    let flag: Boolean = true;
    // GET: Subscribing To Get Cart Item by Cart ID
    this._cartService.getCartById(cartId).subscribe(
      (response) => {
        this.cartData = response;
        this.cartData.cartTotal--;
        if (this.cartData.cartTotal == 0) {
          this.cartData.cartTotal = 0;
          this.toast.warning({ detail: "WARN", summary: "Cart Quantity can't be Negative!", duration: 5000 });
          flag = false;
          this.removeItem(this.cartData.cartId);
          // this.newItemEvent.emit(-this.item.cartProductPrice);
        }

        else {
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
          this.newItemEvent.emit(-this.item.cartProductPrice);
        }
      }
    );
    if (this.quantity > 0)
      this.quantity--;
  }

  // To Remove Cart Item
  removeItem(cartId: any) {
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
        console.log(this.cartData.cartTotal);
        console.log(this.item.cartProductPrice);
        console.log(-(this.item.cartProductPrice*(this.cartData.cartTotal)));
        this.newItemEvent.emit(-(this.item.cartProductPrice*(this.cartData.cartTotal)));
      }
    );
    // DELETE: Subscribing To Delete Cart Item
   
    this._cartService.deleteCartData(cartId).subscribe(() => {
      this.removiedId.emit(cartId);
      this.toast.success({ detail: "SUCCESS", summary: 'Cart Item Removed Successfully!', duration: 5000 });
    });
    
  }
}
