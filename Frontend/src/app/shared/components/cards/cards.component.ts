import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items:any={};
  constructor(private router : Router) {

  }
  ngOnInit(): void {
           // without subscribe will not be able to access.
  }
  onRequest():void{

  }
 

}
