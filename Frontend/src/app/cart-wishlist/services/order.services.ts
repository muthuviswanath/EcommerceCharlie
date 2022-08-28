import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
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
}
