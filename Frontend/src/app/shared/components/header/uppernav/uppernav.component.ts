import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uppernav',
  templateUrl: './uppernav.component.html',
  styleUrls: ['./uppernav.component.css']
})
export class UppernavComponent implements OnInit {

  public searchString: string = "";
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  submitSearch() {
    const payload = { searchString: this.searchString };
  }


}

