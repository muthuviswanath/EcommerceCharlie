import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { IOrder } from "../interfaces/IOrder";

@Injectable({
  providedIn: 'root'
})

export class OrderServices implements OnInit {

  baseURL: string = "http://localhost:33037/";

  // To Get User ID At The Time Of User Login Using Session Storage
  userID = sessionStorage.getItem('userID');

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  // GET: Service To Get All Order History Data From Database
  getAllOrder(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseURL}api/Orders`);
  }

  // GET: Service To Get Order List Of User
  getIndiviualOrderListById(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseURL}api/Orders/user/${this.userID}`);
  }

  // POST: Service To Post Order In Database
  addToOrderHistory(orderData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Orders`, orderData, httpOptions);
  }
}
