import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MessagerService } from '../../services/messager.service';
import { IUser } from '../../models/user';
import { FormUserComponent } from '../form-user/form-user.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { IMessage } from '../../models/messager';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [FormUserComponent, ReactiveFormsModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss',
})
export class ListUserComponent implements OnInit {
  isModelopened = false;
  @Output() onCloseModel = new EventEmitter();
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private sessagerService: MessagerService,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.getAllUsers();
  }
  users: IUser[] = [];
  getAllUsers() {
    this.usersService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response.data;
      },
    });
  }
  deleteUser(id: string) {
    this.usersService.deleteUser(id).subscribe({
      next: (response) => {
        this.getAllUsers();
      },
    });
  }
  openModel() {
    this.isModelopened = true;
  }
  cloneModel() {
    this.isModelopened = false;
  }
  userEdit: IUser[] = [];
  editUser(id: string) {
    this.usersService.getUser(id).subscribe({
      next: (response) => {
        this.editForm.value.name = response.data.name;
        this.editForm.value.id = response.data._id;
        this.editForm.value.email = response.data.email;
        this.editForm.value.password = response.data.password;
        const { name, id, email, password } = this.editForm.value;
        console.log(name, id, email, password);
      },
    });
  }
  onSubmit() {
    if (this.editForm.valid) {
      console.log(this.editForm.value.name);
    } else {
      console.log('error');
    }
  }

  // chat
  onChat(id_in: string) {
    const userString = this.cookieService.get('user');
    // Parse the user string back to an object using JSON.parse
    const user: IUser = JSON.parse(userString);
    const id_out: string = user._id || '';
    this.sessagerService.getChat(id_in, id_out).subscribe(
      (response) => {
        if (
          response &&
          response.message === 'get user successfully' &&
          response.data !== null
        ) {
          const mess: IMessage = response.data;

          // Convert user object to a string using JSON.stringify
          const messString = JSON.stringify(mess);
          // Set the user object as a string in the cookie
          this.cookieService.set('mess', messString);

          this.router.navigate(['/chat']);
        } else {
          console.log('Cuoc hoi thoai khong ton tai');
        }
      },
      (error) => {
        console.error('Lỗi khi thực hiện đăng nhập:', error);
      }
    );
  }
}
