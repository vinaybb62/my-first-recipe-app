import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {

  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    console.log(form)
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true

    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe(
        resData => {
          console.log(resData);
          this.router.navigate(['/recipes']);
          this.isLoading = false
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false
        }
      );
    }
    else {
      this.authService.signup(email, password).subscribe(
        resData => {
          console.log(resData);
          this.router.navigate(['/recipes']);
          this.isLoading = false
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false
        }
      );
    }

    form.reset();
  }


  ngOnInit(): void {
  }

}
