import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeServices {
  public cartBadgeDisplayMessage = new Subject<number>();
 

  constructor() {

  }
  
  cartBadgeCount(message: number) {
    this.cartBadgeDisplayMessage.next(message)
  }

  
}