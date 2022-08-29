import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { ICart } from "../interfaces/ICart";

@Injectable({
  providedIn: 'root'
})

export class CartServices implements OnInit {

  baseURL: string = "http://localhost:33037/";
  public data: any = {};

  // To get User ID at time of user Login using Local Storage
  userdata = localStorage.getItem('user');
  obj = JSON.parse(this.userdata);

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  public setOptions(option, value) {
    this.data[option] = value;
  }

  public getOptions() {
    return this.data;
  }

  // GET: Service To Get All Cart Items from Database
  public getAllCart(): Observable<ICart[]> {
    return this.http.get<ICart[]>(`${this.baseURL}api/Carts`);
  }

  // GET: Service To Get Cart Item by User ID
  public getIndiviualCartId(): Observable<ICart[]> {
    return this.http.get<ICart[]>(`${this.baseURL}api/carts/user/${this.obj.userId}`);
  }

  // GET: Service To Get Cart Item by Product ID
  public getCartByProductId(productId: any) {
    return this.http.get(`${this.baseURL}api/Carts/product/${productId}`);
  }

  // POST: Service To Post Cart Item in Database
  public addToCart(cartData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Carts`, cartData, httpOptions);
  }

  // GET: Service To Get Cart Item by Cart ID
  public getCartById(cartId: any) {
    return this.http.get(`${this.baseURL}api/Carts/${cartId}`);
  }

  // PUT: Service To Update Cart Data
  public updateCartData(cartId: any, cartData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.put(`${this.baseURL}api/Carts/${cartId}`, cartData, httpOptions);
  }

  // DELETE: Service To Delete Cart Item from Database
  public deleteCartData(cartId: any) {
    return this.http.delete(`${this.baseURL}api/Carts/${cartId}`, cartId);
  }
}
