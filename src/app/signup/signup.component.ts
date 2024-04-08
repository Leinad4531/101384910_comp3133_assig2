

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };
  submitted = false;
  registrationSuccess = false;

  constructor(private authService: AuthService, private router :  Router) { }

  register() { 
    this.submitted = true;
    if (this.isValidForm()) {
      this.authService.signup(this.user.username, this.user.email, this.user.password)
        .subscribe(
          response => {
            // Handle successful registration
            console.log('Signup successful:', response);
            this.registrationSuccess = true;
            setTimeout(() => this.router.navigate(['/login']), 1500);
          },
          error => {
            // Handle registration failure
            console.error('Signup failed:', error);
            this.registrationSuccess = false;
          }
        );
    }
  }

  isValidForm(): boolean {
    return !!this.user.username && !!this.user.email && !!this.user.password;
  }
}
