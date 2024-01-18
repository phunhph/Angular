import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { __values } from 'tslib';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.onlogin(this.loginForm.value).subscribe({
        next: (value) => {
          this.router.navigate(['/Home']);
        },
      });
      // if (
      //   this.loginForm.value.password == '123' &&
      //   this.loginForm.value.email == 'phu@mail.com'
      // ) {
      //   this.router.navigate(['/Home']);
      // } else {
      //   this.router.navigate(['']);
      // }
    } else this.loginForm.markAllAsTouched();
  }
}
