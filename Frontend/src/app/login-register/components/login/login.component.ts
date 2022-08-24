import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServices } from 'src/app/login-register/services/login.services';
import { ILogin } from "../../interfaces/ILogin";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formData: any = {};
  public showMessage: boolean = false;
  // username=new FormControl('',[Validators.required,Validators.minLength(7)]);
  // password=new FormControl('',[Validators.required,Validators.minLength(8)]);
  // email=new FormControl('',[Validators.required,Validators.minLength(7)]);

  constructor(private service: LoginServices) {

  }
  userList: ILogin[];
  ngOnInit(): void {
    this.service.getLoginInfo().subscribe(
      res => this.userList = res
    );
  }
  // loginForm:FormGroup=this.builder.group({
  //   username:this.username,
  //   password:this.password,
  //   email:this.email
  // })

  // login() {
  //   this.formData=this.loginForm.value;

  // this.userTest = this.service.getUserByUsername(this.formData.username)b,su
  // if(this.userTest == null){
  //   return
  // }
  // // else if(this.formData.password == this.userTest.password && this.formData.email == this.userTest.email){
  // //   this.showMessage=true;
  // // }
  // // else{
  // //   return
  // // }
  // this.service.getLoginInfo().subscribe((users:ILogin[]) => {

  // });

  // }


}