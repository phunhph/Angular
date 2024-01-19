import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { LoginService } from '../../services/login.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Output() onCloseModel = new EventEmitter();
  loginForm: FormGroup;

  constructor(
    private cookieService: CookieService,
    private fb: FormBuilder,
    private loginservice: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    if (this.cookieService.get('user')) {
      this.router.navigate(['/list']);
    }
  }
  onClose() {
    this.onCloseModel.emit(false);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.loginservice.loginUser(email, password).subscribe(
        (response) => {
          if (
            response &&
            response.message === 'delete user successfully' &&
            response.data !== null
          ) {
            const user: IUser = response.data;
            // Convert user object to a string using JSON.stringify
            const userString = JSON.stringify(user);
            // Set the user object as a string in the cookie
            this.cookieService.set('user', userString);
            this.router.navigate(['/list']);
          } else {
            console.log('Đăng nhập thất bại');
          }
        },
        (error) => {
          console.error('Lỗi khi thực hiện đăng nhập:', error);
          // Xử lý lỗi, hiển thị thông báo lỗi hoặc thực hiện các hành động khác khi có lỗi
        }
      );
    }
  }
}
