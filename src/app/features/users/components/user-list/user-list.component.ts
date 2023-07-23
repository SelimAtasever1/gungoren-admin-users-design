import { Component, Input, OnInit } from '@angular/core';
import { UsersModel } from '@shared/users/models/users.model';
import { UsersService } from '@shared/users/services/users/users.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: UsersModel[];
  @Input() filteredString : string = "";

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.page$.subscribe((pageIndex: number) => {

      const adjustedIndex = pageIndex + 1;
      this.loadUsersByPage(adjustedIndex);
    });

    this.loadUsersByPage(0);
  }

  loadUsersByPage(pageIndex: number): void {
    const pageSize = 7;
    this.users = this.userService.GetUsersByPage(pageIndex, pageSize);
  }
}
