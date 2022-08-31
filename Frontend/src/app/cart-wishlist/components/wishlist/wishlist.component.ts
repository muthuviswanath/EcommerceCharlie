import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { IWishList } from '../../interfaces/IWishList';
import { WishListServices } from '../../services/wishlist.services';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishList: IWishList[];
  wishListData: any = {};

  constructor(private _wishListService: WishListServices, private toast: NgToastService) {

  }

  ngOnInit(): void {
    // GET: Subscribing To Get All Wishlist Data
    // this._wishListService.getAllWishList().subscribe(
    //   (response) => {
    //     this.wishList = response;
    //   }
    // );

    this._wishListService.getIndiviualwishListById().subscribe(
      (response) => {
        this.wishList = response;
      }
    );
  }

  // To Remove Wishlist Data
  public removeItem(wishListId: any) {
    // DELETE: Subscribing To Delete Wishlist Item
    this._wishListService.deleteWishListData(wishListId).subscribe(
      () => {

      }
    );
    this.toast.success({ detail: "SUCCESS", summary: 'Wishlist Item Removed Successfully!', duration: 5000 });
    window.location.reload();
  }
}
