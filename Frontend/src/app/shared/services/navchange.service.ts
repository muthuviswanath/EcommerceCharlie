import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class navchangeservice {

  private approvalStageMessage = new BehaviorSubject({ loginfo: false, loguser: null });
  currentApprovalStageMessage = this.approvalStageMessage.asObservable();

  constructor() {

  }

  updateApprovalMessage(message: any) {
    this.approvalStageMessage.next(message);
  }
}
