import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { ICart } from "../interfaces/ICart";

@Injectable({
  providedIn: 'root'
})

export class CartServices implements OnInit {

  baseURL: string = "http://localhost:33037/";
  data: any = {};

  // To Get User ID At The Time Of User Login Using Session Storage
  ///userID = sessionStorage.getItem('userID');

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {

  }

  setOptions(option, value) {
    this.data[option] = value;
  }

  getOptions() {
    return this.data;
  }

  // GET: Service To Get All Cart Items From Database
  getAllCart(): Observable<ICart[]> {
    return this.http.get<ICart[]>(`${this.baseURL}api/Carts`);
  }

  // GET: Service To Get Cart Item By User ID
  getIndiviualCartId(): Observable<ICart[]> {
    const userID = sessionStorage.getItem('userID');
    return this.http.get<ICart[]>(`${this.baseURL}api/carts/user/${userID}`);
  }

  // GET: Service To Get Cart Item By Product ID
  getCartByProductId(productId: any) {
    return this.http.get(`${this.baseURL}api/Carts/product/${productId}`);
  }

  // POST: Service To Post Cart Item In Database
  addToCart(cartData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Carts`, cartData, httpOptions);
  }

  // GET: Service To Get Cart Item By Cart ID
  getCartById(cartId: any) {
    return this.http.get(`${this.baseURL}api/Carts/${cartId}`);
  }

  // PUT: Service To Update Cart Data
  updateCartData(cartId: any, cartData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.put(`${this.baseURL}api/Carts/${cartId}`, cartData, httpOptions);
  }

  // DELETE: Service To Delete Cart Item From Database
  deleteCartData(cartId: any) {
    return this.http.delete(`${this.baseURL}api/Carts/${cartId}`, cartId);
  }
}
