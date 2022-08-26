import { Component, OnInit } from '@angular/core';
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

  constructor(private _wishListService: WishListServices) {

  }
  ngOnInit(): void {
    this._wishListService.getAllWishList().subscribe(
      (response) => {
        this.wishList = response;
      }
    );
  }

  public removeItem(wishListId: any) {
    this._wishListService.deleteWishListData(wishListId).subscribe(
      () => {

      }
    )
  }
}
