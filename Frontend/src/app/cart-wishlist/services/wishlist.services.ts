import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { IWishList } from "../interfaces/IWishList";

@Injectable({
  providedIn: 'root'
})

export class WishListServices implements OnInit {

  baseURL: string = "http://localhost:33037/";

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  public getAllWishList(): Observable<IWishList[]> {
    return this.http.get<IWishList[]>(`${this.baseURL}api/WishLists`);
  }

  // Code Added By Apoorv
  public addToWishList(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/WishLists`, data, httpOptions);
  }

  public deleteWishListData(wishListId: any){
    return this.http.delete(`${this.baseURL}api/WishLists/${wishListId}`, wishListId);
  }
}
