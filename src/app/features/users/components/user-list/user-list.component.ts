import { Component, OnInit } from '@angular/core';
import { UsersModel } from '@shared/users/models/users.model';
import { UsersService } from '@shared/users/services/users/users.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private userService = new UsersService();
  users: UsersModel[];

  ngOnInit(): void {
    this.loadUsersByPage(1);
  }

  loadUsersByPage(pageIndex: number): void {
    const pageSize = 7;
    this.users = this.userService.GetUsersByPage(pageIndex, pageSize);
  }
}
