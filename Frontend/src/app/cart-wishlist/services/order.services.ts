import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { IOrder } from "../interfaces/IOrder";

@Injectable({
  providedIn: 'root'
})

export class OrderServices implements OnInit {

  baseURL: string = "http://localhost:33037/";

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  // GET: Service To Get All Order History Data from Database
  public getAllOrder(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseURL}api/Orders`);
  }

  // GET: Service To Get Order List of User
  public getIndiviualOrderListById(): Observable<IOrder[]> {
    const userdata = localStorage.getItem('user');
    const obj = JSON.parse(userdata);
    return this.http.get<IOrder[]>(`${this.baseURL}api/Orders/user/${obj.userId}`);
  }

  // POST: Service To Post Order in Database
  public addToOrderHistory(orderData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Orders`, orderData, httpOptions);
  }
}
