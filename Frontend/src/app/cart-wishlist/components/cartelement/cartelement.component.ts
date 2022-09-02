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

  @Input() item:ICart;
  @Output() newItemEvent = new EventEmitter<number>();
  cartData: any = {};
  quantity:number=0;
  productData: any = {};
  constructor(private _cartService: CartServices, private _productService: ProductServices, private toast: NgToastService) { }

  ngOnInit(): void {
     this.quantity=this.item.cartTotal;

  }

  public updateProduct() {
    // PUT: Subscribing To Update Product by Product ID
    this._productService.updateProduct(this.productData.productId, this.productData).subscribe();
  }

  public updateCart() {
    // PUT: Subscribing To Update Cart Data
    this._cartService.updateCartData(this.cartData.cartId, this.cartData).subscribe();
   //$$ this.loadCartData();
  
  }
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
            this.newItemEvent.emit(this.item.cartProductPrice);
          }
        );
      }
    );
    this.quantity++;
   // window.location.reload();
  }



  
  public decrementItem(cartId: any) {
    let flag: Boolean = true;
    console.log(cartId);
    console.log("hello");
    
    // GET: Subscribing To Get Cart Item by Cart ID
     this._cartService.getCartById(cartId).subscribe(
      (response) => {
        console.log(response);
        
        
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
        this.newItemEvent.emit(-this.item.cartProductPrice);
      }
    );
    if(this.quantity>0)
    this.quantity--;
    
  }


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
    
  }


}
