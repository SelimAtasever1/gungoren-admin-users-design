import { Pipe, PipeTransform } from '@angular/core';
import { UsersModel } from '@shared/users/models/users.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: UsersModel[], filteredString: string): UsersModel[] {
    if (!value || !filteredString) {
      return value;
    }

    const filteredUsers = value.filter(user => {
      if (user.fullname && user.fullname.toLowerCase().includes(filteredString.toLowerCase())) {
        return true;
      }
      return false;
    });

    if (filteredUsers.length === 0) {
      return [];
    }

    return filteredUsers;
  }
}
