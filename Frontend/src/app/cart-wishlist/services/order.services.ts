import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IOrder } from "../interfaces/IOrder";

@Injectable({
  providedIn: 'root'
})

export class OrderServices implements OnInit {
  constructor(private http: HttpClient) { }
  baseurl: string = "http://localhost:33037/"
  ngOnInit(): void {

  }
  getAllOrder(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseurl + "api/Orders")
  }
}
