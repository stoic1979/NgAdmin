import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AppMaterialModule } from './../app-material/app-material.module';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AppMaterialModule, // shared material module
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthModule { }
