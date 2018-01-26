import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})

export class SignupComponent implements OnInit {

  form: FormGroup;                    
  private formSubmitAttempt: boolean; 

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  	 this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password1: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

   onSubmit() {
   	console.log("[SignupComponent] :: onSubmit ");
    if (this.form.valid) {
      this.authService.signup(this.form.value);
      console.log("[SignupComponent] :: sending sign up request ");
    }
    this.formSubmitAttempt = true;
  }

  showLogin() {
    this.router.navigate(['/auth/login']);
  }

}
