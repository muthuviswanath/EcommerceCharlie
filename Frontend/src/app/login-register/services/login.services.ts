import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILogin } from "../interfaces/ILogin";

@Injectable({
  providedIn: 'root'
})

export class LoginServices implements OnInit {

  baseURL: string = "http://localhost:33037/";
  public data: any = {};

  constructor(private http: HttpClient) {

  }

  // GET: Service To Get Details of All Users
  getLoginInfo(): Observable<ILogin[]> {
    return this.http.get<ILogin[]>(`${this.baseURL}api/Users`);
  }

  ngOnInit(): void {

  }

  setOptions(option, value) {
    this.data[option] = value;
  }

  getOptions() {
    return this.data;
  }

  // GET: Service To Get User Data by User ID
  public getUserById(userId: any) {
    return this.http.get(`${this.baseURL}api/Users/${userId}`);
  }

  // POST: Service To Register User
  public registerUser(userData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Users`, userData, httpOptions);
  }

  // POST: Service To Check User Credentials
  public loginUser(userData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Users/login`, userData, httpOptions);
  }

  // PUT: Service To Update User Data
  public updateUser(userId: any, userData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.put(`${this.baseURL}api/Users/${userId}`, userData, httpOptions);
  }
}
