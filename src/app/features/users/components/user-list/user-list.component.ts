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
  filteredString: string = "";
  adjustedIndex : number;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.page$.subscribe((pageIndex: number) => {
      this.adjustedIndex = pageIndex + 1;
      this.loadUsersByPage(this.adjustedIndex);
    });

    this.userService.searchTextChanged$.subscribe((searchText: string) => {
      this.filteredString = searchText;
      console.log("header input search result: " + this.filteredString);

      this.loadAllUsers(); 
      if(this.filteredString === ""){
        this.loadUsersByPage(this.adjustedIndex);
      }
    });
  }

  loadUsersByPage(pageIndex: number): void {
    const pageSize = 7;
    this.users = this.userService.GetUsersByPage(pageIndex, pageSize);
  }

  loadAllUsers(): void {
    this.users = this.userService.GetUsers();
  }
}
