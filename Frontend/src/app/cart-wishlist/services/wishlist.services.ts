import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { IWishList } from "../interfaces/IWishList";

@Injectable({
  providedIn: 'root'
})

export class WishListServices implements OnInit {
  constructor(private http: HttpClient) { }
  baseurl: string = "http://localhost:33037/"
  ngOnInit(): void {

  }

  getAllWishList(): Observable<IWishList[]> {
    return this.http.get<IWishList[]>(this.baseurl + "api/WishLists")
  }

//code added by apoorv
  public addToWishList(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(this.baseurl + "api/Wishlists", data, httpOptions);
  }
 
}
