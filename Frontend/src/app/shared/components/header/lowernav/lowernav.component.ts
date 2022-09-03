import { Component, OnInit } from '@angular/core';
import { navchangeservice } from 'src/app/shared/services/navchange.service';

@Component({
  selector: 'app-lowernav',
  templateUrl: './lowernav.component.html',
  styleUrls: ['./lowernav.component.css']
})
export class LowernavComponent implements OnInit {
  public userLoggedIn:any={};
  constructor(private appService:navchangeservice) {

  }

  ngOnInit(): void {
    this.appService.currentApprovalStageMessage.subscribe(msg => this.userLoggedIn = msg);
  }

}
