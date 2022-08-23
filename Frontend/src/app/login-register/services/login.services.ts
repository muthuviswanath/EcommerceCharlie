import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILogin } from "../interfaces/ILogin";

@Injectable({
  providedIn: 'root'
})

export class LoginServices implements OnInit {
  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:33037/"
  getLoginInfo(): Observable<ILogin[]> {
    return this
      .http
      .get<ILogin[]>(this.baseUrl + "api/Users");
  }
  ngOnInit(): void {

  }

}
