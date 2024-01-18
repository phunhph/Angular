import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.scss',
})
export class FormUserComponent {
  @Output() onCloseModel = new EventEmitter();
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      id: new FormGroup('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.userForm.value.id != '') {
        this.userService.createUser(this.userForm.value).subscribe({
          next: (response) => {
            this.onClose();
            this.router.navigate(['/list']);
          },
        });
      } else {
        this.userService
          .updateUser(this.userForm.value.id, this.userForm.value)
          .subscribe({
            next: (response) => {},
          });
      }
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
