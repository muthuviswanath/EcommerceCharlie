import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginServices } from './services/login.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { AccountComponent } from './components/account/account.component';
import { navchangeservice } from '../shared/services/navchange.service';

const Components = [LoginComponent, RegisterComponent, UserComponent, AccountComponent]
@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginServices,navchangeservice],
  exports: Components
})
export class LoginRegisterModule { }
