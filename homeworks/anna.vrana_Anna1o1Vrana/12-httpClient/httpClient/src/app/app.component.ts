import {Component, OnInit} from '@angular/core';
import {UserModel} from "./models/user.model";
import {UserService} from "./services/user.service";
import {Subscription} from "rxjs";
import {UsersResponse} from "./models/UsersResponce";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public usersArr: UserModel[] = [];
  public usersResponse: UsersResponse[] = []
  private subscription: Subscription = new Subscription();
  currentPage: number = 1;
  totalPages: number = 0;
  public pages: Array<number> = []

  constructor(
    private userService: UserService,
  ) {  }

  onChangePage(event: number) {
    this.currentPage = event;
    console.log(this.currentPage)
    this. getUsers()
  }

  getUsers(): void {
    this.subscription = this.userService.getUsersArr(this.currentPage)
      .subscribe((users: UsersResponse) => {
        this.usersArr = users.data;
        this.totalPages = users.total_pages;
        this.pages = new Array(users.total_pages)
      })
  }

  getPageArr(page: number): void {
    for (let i = 0; i < page; i++) {
      this.pages.push(i);
    }
  }

  ngOnInit(): void {
    this.getUsers()
    this.getPageArr(this.totalPages)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
