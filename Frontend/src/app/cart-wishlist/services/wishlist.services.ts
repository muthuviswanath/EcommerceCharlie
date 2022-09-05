import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { IWishList } from "../interfaces/IWishList";

@Injectable({
  providedIn: 'root'
})

export class WishListServices implements OnInit {

  baseURL: string = "http://localhost:33037/";

  // To Get User ID At The Time Of User Login Using Session Storage
 


  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  // GET: Service To Get All Wishlist Data From Database
  getAllWishList(): Observable<IWishList[]> {
    return this.http.get<IWishList[]>(`${this.baseURL}api/WishLists`);
  }

  // GET: Service To Get Wishlist Of The User
  getIndiviualwishListById(): Observable<IWishList[]> {
    const userID = sessionStorage.getItem('userID');
    return this.http.get<IWishList[]>(`${this.baseURL}api/WishLists/user/${userID}`);
  }

  // POST: Service To Add Wishlist Data In Database
  addToWishList(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/WishLists`, data, httpOptions);
  }

  // DELETE: Service To Delete Wishlist Data From Database
  deleteWishListData(wishListId: any) {
    return this.http.delete(`${this.baseURL}api/WishLists/${wishListId}`, wishListId);
  }

  // GET: Service To Get Wishlist By Wishlist ID
  getWishlistItemById(wishlistid: any) {
    return this.http.get(`${this.baseURL}api/WishLists/${wishlistid}`)
  }
}
