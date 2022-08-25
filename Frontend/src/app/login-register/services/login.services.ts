import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { ILogin } from "../interfaces/ILogin";

@Injectable({
  providedIn: 'root'
})

export class LoginServices implements OnInit {
  constructor(private http: HttpClient) { }
  baseURl: string = "http://localhost:33037/"
  getLoginInfo(): Observable<ILogin[]> {
    return this
      .http
      .get<ILogin[]>(this.baseURl + "api/Users");
  }
  ngOnInit(): void {

  }
        /***Login user service  */
  public loginUser(data:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8'
      })
    };
    return this.http.post(this.baseURl+"api/Users/login",data,httpOptions);
  }






  public registerUser(data:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8'
      })
    };
    return this.http.post(this.baseURl+"api/Users",data,httpOptions);
  }
}
