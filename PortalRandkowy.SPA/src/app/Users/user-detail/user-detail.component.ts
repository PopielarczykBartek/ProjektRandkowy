import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private userServices: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute){}



  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }
  //           //users/3
  // loadUser(): void{
  //   this.userServices.getUser(+this.route.snapshot.params['id'])
  //   .subscribe((user: User) => {
  //     this.user = user;
  //   }, error => {
  //     this.alertify.error(error);
  //   }
  //   );
  // }

}
