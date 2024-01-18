import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { CardComponent } from '../../shared/component/card/card.component';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';

import { LoginService } from '../../core/services/login.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardComponent, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Output() onCloseModel = new EventEmitter();
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginservice: LoginService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  // openToast() {
  //   this.toastrService.error('Working');
  // }
  onClose() {
    this.onCloseModel.emit(false);
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.router.navigate(['messages']);
      this.toastrService.success('login');
      // this.loginservice.loginUser(email, password).subscribe(
      //   (response) => {
      //     if (
      //       response &&
      //       response.message === 'delete user successfully' &&
      //       response.data !== null
      //     ) {
      //       // this.router.navigate(['/list']);
      //       console.log('done');
      //     } else {
      //       console.log('Đăng nhập thất bại');
      //     }
      //   },
      //   (error) => {
      //     console.error('Lỗi khi thực hiện đăng nhập:', error);
      //   }
      // );
    }
  }
}
