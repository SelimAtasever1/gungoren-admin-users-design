import { Injectable } from '@angular/core';
import { UsersModel } from '@shared/users/models/users.model';
import { Subject } from 'rxjs';

@Injectable()
export class UsersService {
	private pageSubject = new Subject<number>();
	page$ = this.pageSubject.asObservable();

	constructor() { }

	private staff : UsersModel[] = [
		new UsersModel("joe doe", "24199214", "joedoe@mail.com", 
		["https://st2.myideasoft.com/idea/gx/27/myassets/products/399/kuru-baklava-32-jpg.jpeg?revision=1612024970", 
		"https://www.thesun.co.uk/wp-content/uploads/2023/05/crop-15137510.jpg?strip=all&quality=100&w=1920&h=1332&crop=1", 
		"https://st2.myideasoft.com/idea/gx/27/myassets/products/399/kuru-baklava-32-jpg.jpeg?revision=1612024970",
		"https://st2.myideasoft.com/idea/gx/27/myassets/products/399/kuru-baklava-32-jpg.jpeg?revision=1612024970",
		"https://st2.myideasoft.com/idea/gx/27/myassets/products/399/kuru-baklava-32-jpg.jpeg?revision=1612024970",
		"https://st2.myideasoft.com/idea/gx/27/myassets/products/399/kuru-baklava-32-jpg.jpeg?revision=1612024970"
		
		], "active"),

		new UsersModel("zoe doe", "24199214", "zoedoe@mail.com", 
		["https://www.thesun.co.uk/wp-content/uploads/2023/05/crop-15137510.jpg?strip=all&quality=100&w=1920&h=1332&crop=1", 
		"https://www.thesun.co.uk/wp-content/uploads/2023/05/crop-15137510.jpg?strip=all&quality=100&w=1920&h=1332&crop=1"], "active"),

		new UsersModel("moe doe", "24199214", "moedoe@mail.com", 
		[
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_kvH-6eeKr0RbOziALLSz1Kchs3HvDFXGg&usqp=CAU", 
			"https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
		], "deactive"),

		new UsersModel("jane doe", "24199214", "janedoe@mail.com", 
		["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mike_Tyson_2019_by_Glenn_Francis.jpg/1200px-Mike_Tyson_2019_by_Glenn_Francis.jpg"], "active"),

		new UsersModel("mary doe", "24199214", "marydoe@mail.com", 
		["https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
		"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
		"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
		"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
		"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
		"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
		"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
		"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
		], "deactive"),

		new UsersModel("john elton", "24199214", "marydoe@mail.com", 
		["https://t3.ftcdn.net/jpg/02/31/65/34/360_F_231653476_ExRE4Pgh49UJT61LilZZygIqsp8fHLZL.jpg",
		"https://t3.ftcdn.net/jpg/02/31/65/34/360_F_231653476_ExRE4Pgh49UJT61LilZZygIqsp8fHLZL.jpg",
		"https://t3.ftcdn.net/jpg/02/31/65/34/360_F_231653476_ExRE4Pgh49UJT61LilZZygIqsp8fHLZL.jpg",
		"https://t3.ftcdn.net/jpg/02/31/65/34/360_F_231653476_ExRE4Pgh49UJT61LilZZygIqsp8fHLZL.jpg",
		"https://t3.ftcdn.net/jpg/02/31/65/34/360_F_231653476_ExRE4Pgh49UJT61LilZZygIqsp8fHLZL.jpg"
		], "deactive"),

		new UsersModel("michael jordan", "24199214", "marydoe@mail.com", 
		[
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_kvH-6eeKr0RbOziALLSz1Kchs3HvDFXGg&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_kvH-6eeKr0RbOziALLSz1Kchs3HvDFXGg&usqp=CAU"
		], "active"),

		new UsersModel("jamal doe", "24199214", "zoedoe@mail.com", 
		["https://www.thesun.co.uk/wp-content/uploads/2023/05/crop-15137510.jpg?strip=all&quality=100&w=1920&h=1332&crop=1", 
		"https://www.thesun.co.uk/wp-content/uploads/2023/05/crop-15137510.jpg?strip=all&quality=100&w=1920&h=1332&crop=1"], "active"),

		new UsersModel("jeff I doe", "24199214", "marydoe@mail.com", ["https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"], "active"),
		new UsersModel("jeff II doe", "24199214", "marydoe@mail.com", ["https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"], "active"),
		new UsersModel("jeff III doe", "24199214", "marydoe@mail.com", ["https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"], "active"),
		new UsersModel("jeff IV doe", "24199214", "marydoe@mail.com", ["https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"], "active"),
		new UsersModel("jeff V doe", "24199214", "marydoe@mail.com", ["https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"], "active"),


	];

	GetUsers(): UsersModel[] {
		return this.staff.slice();
	}

	GetUsersByPage(pageIndex: number, pageSize: number): UsersModel[] {
		const startIndex = (pageIndex - 1) * pageSize;
		const endIndex = startIndex + pageSize;
		return this.staff.slice(startIndex, endIndex);
	}

	GetTotalUsers(): number {
		return this.staff.length;
	}

	emitPage(index: number): void {
		this.pageSubject.next(index);
	}
}
