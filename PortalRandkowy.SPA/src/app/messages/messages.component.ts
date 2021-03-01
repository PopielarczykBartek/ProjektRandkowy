import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { Pagination, PaginationResult } from '../_models/pagination';
import { AuthService } from '../_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[];
  pagination: Pagination;
  messageContainer = 'Nieprzeczytane';

  constructor(private userService: UserService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.messages = data.messages.result;
      this.pagination = data.messages.pagination;
    });
  }

  loadMessages(): any{
    this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage,
                                  this.pagination.itemsPerPage, this.messages)
        .subscribe((res: PaginationResult<Message[]> | any) => {
          this.messages = res.result;
          this.pagination = res.pagination;
        }, error => {
          this.alertify.error(error); 
        });
  }

  deleteMessage(id: number):any{
    this.alertify.confirm("Czy na pewno chcesz usunąć tą wiadomość?", () => {
      this.userService.deleteMessage(id, this.authService.decodedToken.nameid)
      .subscribe(() => {
        this.messages.splice(this.messages.findIndex(m => m.id === id), 1); // usniecie wiadomosci z naszej listy
        this.alertify.success("Wiadomość została pomyślnie usnięta.");
      }, error => {
        this.alertify.error("Nie udalo się usunąć wiadomości.");
      });
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadMessages();
  }




}