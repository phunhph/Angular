import { Routes } from '@angular/router';
import { ListUserComponent } from './component/list-user/list-user.component';
import { LoginComponent } from './component/login/login.component';
import { FormUserComponent } from './component/form-user/form-user.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'list', component: ListUserComponent },
  { path: 'add', component: FormUserComponent },
  { path: 'user/:id', component: FormUserComponent },
];
