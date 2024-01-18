import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListUserComponent } from './component/list-user/list-user.component';
import { FormUserComponent } from './component/form-user/form-user.component';
import { LoginComponent } from './component/login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ListUserComponent,
    FormUserComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CRUD_API';
}
