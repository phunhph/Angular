import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';
import { CardComponent } from '../../shared/component/card/card.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CardComponent, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  @Output() onCloseModel = new EventEmitter();
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginservice: LoginService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      fullname: ['', Validators.required],
    });
  }
  onClose() {
    this.onCloseModel.emit(false);
  }
  onSubmit() {
    if (this.registerForm.valid) {
      // this.loginservice.createUser(this.registerForm.value).subscribe({
      //   next: (response) => {
      //     this.onClose();
      //     this.router.navigate(['/list']);
      //   },
      // });
      this.router.navigate(['']);
      this.toastrService.success('create user');
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
