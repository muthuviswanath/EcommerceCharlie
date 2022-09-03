import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  baseURL: string = "http://localhost:33037/";

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private route: Router, private toast: NgToastService) {

  }

  // To Restrict Usage
  public canActivate() {
    const token = sessionStorage.getItem("JWT");
    if (token && !this.jwtHelper.isTokenExpired(token))
      return true;
    this.toast.info({ detail: "INFO", summary: 'You Need To Login First!', sticky: true });
    this.route.navigate(["/login"]);
    return false;
  }

  // POST: Service To Check Credentials & Get JWT Token
  public loginUserByJWT(userData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Users/authLogin`, userData, httpOptions);
  }

}
