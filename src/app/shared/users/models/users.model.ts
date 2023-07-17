import { uuid } from '@rilke/common/utility';

export class UsersModel{
    public fullname : string;
    public phone: string;
    public email: string;
	public badges: string[];
	public status: string;

    constructor(fullname: string, phone: string, email: string, badges: string[], status: string){
        this.fullname = fullname;
        this.phone = phone;
        this.email = email;
		this.badges = badges;
        this.status = status;
    }
}
