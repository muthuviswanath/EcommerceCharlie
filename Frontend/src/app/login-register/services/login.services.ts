import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILogin } from "../interfaces/ILogin";

@Injectable({
  providedIn: 'root'
})

export class LoginServices implements OnInit {

  baseURL: string = "http://localhost:33037/";

  constructor(private http: HttpClient) {

  }

  getLoginInfo(): Observable<ILogin[]> {
    return this.http.get<ILogin[]>(`${this.baseURL}api/Users`);
  }

  ngOnInit(): void {

  }

  // Register User Service
  public registerUser(userData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Users`, userData, httpOptions);
  }

  // Login User Service
  public loginUser(userData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Users/login`, userData, httpOptions);
  }
}
