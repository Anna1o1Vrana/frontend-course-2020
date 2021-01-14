import {Component, Input, Output, EventEmitter} from '@angular/core';
import {UserService} from "../services/user.service";
import {UserModel} from "../models/user.model";
import {UsersResponse} from "../models/UsersResponce";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalPages!: number;
  @Input() currentPage!: number;
  @Input() pages!: Array<number>;
  @Output()onChangePage = new EventEmitter<number>()

  constructor(
    private userService: UserService
  ) {  }

  getCurrentUsers(index: number): void {
    this.onChangePage.emit(index + 1)
  }

}
