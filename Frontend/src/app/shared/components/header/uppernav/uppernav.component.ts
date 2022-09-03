import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from 'src/app/cart-wishlist/interfaces/ICart';
import { IWishList } from 'src/app/cart-wishlist/interfaces/IWishList';
import { CartServices } from 'src/app/cart-wishlist/services/cart.services';
import { WishListServices } from 'src/app/cart-wishlist/services/wishlist.services';
import { navchangeservice } from 'src/app/shared/services/navchange.service';

@Component({
  selector: 'app-uppernav',
  templateUrl: './uppernav.component.html',
  styleUrls: ['./uppernav.component.css']
})
export class UppernavComponent implements OnInit {

  public searchString: string = "";
  public isLoggedIn: boolean;
  user = localStorage.getItem('user');
  public isAdmin: boolean = false;
  cartList: ICart[];
  cartCount: number = 0;
  wishList:IWishList[];
  wishListCount:number=0;
  public userLoggedIn:any={};
  constructor(private route: Router,private _cartService: CartServices,private _wishListService: WishListServices,private appService: navchangeservice) {

  }

  ngOnInit(): void {

    this.appService.currentApprovalStageMessage.subscribe(msg => this.userLoggedIn = msg);
   // console.log(this.user.userName);
  /**  if(this.user!=null){ 
   if (this.user =='admin' ) {
      this.userLoggedIn.loginfo=true;
      this.userLoggedIn.loguser=this.user;
    }
    else
    {
      this.userLoggedIn.loginfo=true;
      this.userLoggedIn.loguser=this.user.userName;
    }
  }*/
    

    //to display cart item count in UpperNav.
    this._cartService.getIndiviualCartId().subscribe(
      (response) => {
        this.cartList = response;
        this.cartCount = this.cartList.length;
      }
    );

    //to display wishlist item count in UpperNav.
    this._wishListService.getIndiviualwishListById().subscribe(
      (response) => {
        this.wishList = response;
        this.wishListCount=this.wishList.length;
      }
    );
  }

  // To Search Products
  submitSearch() {
    const payLoad = { searchString: this.searchString };
    this.route.navigateByUrl(`/search/` + this.searchString).then(
      () => {
        window.location.reload();
      }
    )
  }

  // To Remove User From Local Storage
  logout() {
    localStorage.setItem('user', JSON.stringify(null));
    localStorage.setItem('auth', JSON.stringify(false));
    this.appService.updateApprovalMessage({loginfo:false,loguser:null});
    this.route.navigateByUrl("/login")
    
  }
}

