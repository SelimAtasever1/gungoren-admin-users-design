import { Component, Input, OnInit  } from '@angular/core';
import { UsersModel } from '@shared/users/models/users.model';

@Component({
	selector: 'user-item',
	templateUrl: './user-item.component.html',
	styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
	@Input() user : UsersModel;
	firstLettersOfFullname : string;
	badgeStatus : string;

	ngOnInit(): void {
		this.firstLettersOfFullname = this.getInitials(this.user.fullname);
		console.log(this.user.badges)
		this.setBadgeStatus();
	}

	onAvatarClick(avatarUrl: string) {
		console.log(avatarUrl); // Use the avatarUrl value as desired
		
	}	  

	setBadgeStatus(){
		this.badgeStatus = this.user.status === 'active' ? 'success' : 'error';
	}

	getInitials(username: string): string {
		const names = username.split(' ');
		let initials = '';
	  
		for (const name of names) {
		  if (name.length > 0) {
			initials += name[0].toUpperCase() + ' ';
		  }
		}
	  
		return initials;
	}
	  

}
