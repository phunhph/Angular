import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { UserComponent } from './Component/user/user.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'User', component: UserComponent },
];
