import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { WInputComponent } from '@/SHARED/Widgets/w-input/w-input.component';
import { LoginService } from './service/login.service';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from './interface/loginRequest.interface';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    ReactiveFormsModule, 
    HttpClientModule,
    WInputComponent],
  templateUrl: './Login.component.html',
  styles: '',
})
export default class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required]],
  });
  login() {
    if (this.loginForm.valid) {
      this.loginService
        .login(this.loginForm.value as LoginRequest, 'api/v1/auth/login')
        .subscribe({
          next: (userData) => {
            localStorage.setItem('token', userData['token']);
          },
          error: (err) => {
            this.router.navigateByUrl('/dashboard');

            console.error(err);
            //this.errorMessage = err;
          },
          complete: () => {
            this.router.navigateByUrl('/dashboard');
            this.loginForm.reset();
          },
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  get username(){
    return this.loginForm.controls.username;
  }
  get password(){
    return this.loginForm.controls.password;
  }
}
