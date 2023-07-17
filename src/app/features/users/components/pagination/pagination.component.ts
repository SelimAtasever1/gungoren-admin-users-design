import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersModel } from '@shared/users/models/users.model';
import { UsersService } from '@shared/users/services/users/users.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  users: UsersModel[] = [];
  length: number;
  index = 0;
  pageSize = 7;

  constructor(
    private userService: UsersService,
  ) {}

  ngOnInit(): void {
    this.length = Math.ceil(this.userService.GetTotalUsers() / this.pageSize);
    this.goToPage(this.index); // Increment index by 1 to match 1-based indexing
  }

  goToPage(index: number): void {
    this.index = index;
    console.info('New page:', index);
    this.userService.emitPage(index);
  }
}
