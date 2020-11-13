import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';

@Injectable()
export class UserDetailResolver implements Resolve<User> {

constructor( private userService: UserService,
             private router: Router,
             private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(route.params.id).pipe(
            catchError(() => {
                this.alertify.error('Problem z pobraniem danych');
                this.router.navigate(['/uzytkownicy']);
                return of(null);
            })
        );
    }
}
