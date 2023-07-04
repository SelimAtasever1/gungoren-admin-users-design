import { Injectable } from '@angular/core';
import { UsersModel } from '@shared/users/models/users.model';

@Injectable()
export class UsersService {
	constructor() { }

	private staff : UsersModel[] = [
		new UsersModel("joe doe", "24199214", "joedoe@mail.com", "none", "active"),
		new UsersModel("zoe doe", "24199214", "zoedoe@mail.com", "none", "active"),
		new UsersModel("moe doe", "24199214", "moedoe@mail.com", "none", "deactive"),
		new UsersModel("jane doe", "24199214", "janedoe@mail.com", "none", "active"),
		new UsersModel("mary doe", "24199214", "marydoe@mail.com", "none", "active")
	];

	GetRecipies(){
		return this.staff.slice(); 
	}
}
