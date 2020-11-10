import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authServices: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authServices.login(this.model).subscribe( next => {
      this.alertify.success('Zalogowales sie do aplikacji');
    }, error => {
      this.alertify.error('Wystapil blad logowania');
    }, () => {
      this.router.navigate(['/uzytkownicy']);
    });
  }

  loggedIn(): any {
    return this.authServices.loggedIn();
  }

  logout(): void{
    localStorage.removeItem('token');
    this.alertify.message('zostales wylogowany');
    this.router.navigate(['/home']);
  }
}
