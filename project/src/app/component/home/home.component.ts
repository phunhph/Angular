import { Component, signal } from '@angular/core';

import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // gán biến
  modulename = 'home';
  // tạo funstion sự kiện
  changemodule(event: any) {
    this.modulename = event.target.value;
  }
  // tạo mảng dữ liệu
  customerlist = signal([
    { id: 1, name: 'name1', country: 'HN' },
    { id: 2, name: 'name2', country: 'HN' },
    { id: 3, name: 'name3', country: 'HN' },
    { id: 4, name: 'name4', country: 'HN' },
    { id: 5, name: 'name5', country: 'HN' },
  ]);
}
