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
  photoUrl: string;

  constructor(public authServices: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit(): void {
    this.authServices.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }

  login(): void {
    this.authServices.login(this.model).subscribe( next => {
      this.alertify.success('Zalogowales sie do aplikacji');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/uzytkownicy']);
    });
  }

  loggedIn(): any {
    return this.authServices.loggedIn();
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authServices.decodedToken = null;
    this.authServices.currentUser = null;
    this.alertify.message('zostales wylogowany');
    this.router.navigate(['/home']);
  }
}
