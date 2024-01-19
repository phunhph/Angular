import { Component } from '@angular/core';
import { IMessage } from '../../models/messager';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-messagers',
  standalone: true,
  imports: [],
  templateUrl: './messagers.component.html',
  styleUrl: './messagers.component.scss',
})
export class MessagersComponent {
  mess: IMessage[] = [];
  user!: IUser;
  constructor(
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (this.cookieService.get('mess')) {
      const messString = this.cookieService.get('mess');
      const userString = this.cookieService.get('user');
      // Parse the user string back to an object using JSON.parse
      this.mess = JSON.parse(messString);
      this.user = JSON.parse(userString);
    } else {
      this.router.navigate(['/list']);
    }
  }
}
