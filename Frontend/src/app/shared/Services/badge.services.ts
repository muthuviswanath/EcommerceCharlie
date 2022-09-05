import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeServices {
  public approvalStageMessage = new Subject<number>();

  constructor() {

  }
  
  updateApprovalMessage(message: number) {
    this.approvalStageMessage.next(message)
  }
}