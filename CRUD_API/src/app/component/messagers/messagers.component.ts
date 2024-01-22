import { Component, EventEmitter, Output } from '@angular/core';
import { IMessage } from '../../models/messager';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { IUser } from '../../models/user';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessagerService } from '../../services/messager.service';

@Component({
  selector: 'app-messagers',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './messagers.component.html',
  styleUrl: './messagers.component.scss',
})
export class MessagersComponent {
  @Output() onCloseModel = new EventEmitter();
  messagesForm: FormGroup;

  user!: IUser;

  id_in!: string;
  constructor(
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private sessagerService: MessagerService,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessagerService
  ) {
    this.route.paramMap.subscribe((params) => {
      // Lấy giá trị của tham số có tên 'id' từ URL
      this.id_in = params.get('id') || '';
    });
    const userString = this.cookieService.get('user');
    this.user = JSON.parse(userString);
    this.messagesForm = this.fb.group({
      id_in: [this.id_in, Validators.required],
      id_out: [this.user._id, Validators.required],
      message: ['', Validators.required],
    });
  }
  onClose() {
    this.onCloseModel.emit(false);
  }
  mess: IMessage[] = [];
  ngOnInit(): void {
    this.getChat();
  }
  getChat() {
    this.route.paramMap.subscribe((params) => {
      // Lấy giá trị của tham số có tên 'id' từ URL
      this.id_in = params.get('id') || '';
    });
    const userString = this.cookieService.get('user');
    this.user = JSON.parse(userString);
    this.messagesForm = this.fb.group({
      id_in: [this.id_in, Validators.required],
      id_out: [this.user._id, Validators.required],
      message: ['', Validators.required],
    });
    this.route.paramMap.subscribe((params) => {
      this.id_in = params.get('id') || '';
      const userString = this.cookieService.get('user');
      // Parse the user string back to an object using JSON.parse
      const user: IUser = JSON.parse(userString);
      const id_out: string = user._id || '';
      this.sessagerService.getChat(this.id_in, id_out).subscribe(
        (response) => {
          if (
            response &&
            response.message === 'get user successfully' &&
            response.data !== null
          ) {
            this.mess = response.data;
          } else {
            console.log('Cuoc hoi thoai khong ton tai');
          }
        },
        (error) => {
          console.error('Lỗi khi thực hiện đăng nhập:', error);
        }
      );
    });
  }
  onSubmit() {
    if (this.messagesForm.valid) {
      this.messageService.createMessage(this.messagesForm.value).subscribe({
        next: (response) => {
          this.getChat();
        },
      });
    }
  }
}
