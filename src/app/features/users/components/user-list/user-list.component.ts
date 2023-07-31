import { Component, Input } from '@angular/core';
import { UsersModel } from '@shared/users/models/users.model';
import { UsersService } from '@shared/users/services/users/users.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users$: Observable<UsersModel[]>; 
  filteredString: string = "";
  adjustedIndex: number;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.page$.subscribe((pageIndex: number) => {
      this.adjustedIndex = pageIndex + 1;
      this.loadUsersByPage(this.adjustedIndex);
    });

    this.userService.searchTextChanged$.subscribe((searchText: string) => {
      this.filteredString = searchText;

      this.loadAllUsers();
      if (this.filteredString === "") {
        this.loadUsersByPage(this.adjustedIndex);
      }
    });
  }

  loadUsersByPage(pageIndex: number): void {
    const pageSize = 7;
    this.users$ = of(this.userService.GetUsersByPage(pageIndex, pageSize)); // Convert to Observable
  }

  loadAllUsers(): void {
    this.users$ = of(this.userService.GetUsers()); // Convert to Observable
  }
}
