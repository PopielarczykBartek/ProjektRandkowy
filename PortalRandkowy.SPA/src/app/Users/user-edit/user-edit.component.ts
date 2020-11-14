import { NgForOf } from '@angular/common';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

    user: User;
  @ViewChild('editForm') editForm: NgForm;

  constructor(private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit(): void{
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }

  updateUser(): void{
    console.log(this.user);
    this.alertify.success('Profil pomyslnie zaktualizowany');
    this.editForm.reset(this.user);
  }


}
