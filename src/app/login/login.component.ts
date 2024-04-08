import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  submitted = false;
  loginSuccess = false;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.submitted = true;
    if (this.isValidForm()) {
      this.authService.login(this.user.email, this.user.password)
        .subscribe(
          response => {
            // Handle successful login
            console.log('Login successful:', response);
            this.loginSuccess = true;
            setTimeout(() => this.router.navigate(['/employees']), 1500);
          },
          error => {
            // Handle login failure
            this.loginSuccess = false;
            console.error('Login failed:', error);
          }
        );
    }
  }

  isValidForm(): boolean {
    return !!this.user.email && !!this.user.password;
  }
}

