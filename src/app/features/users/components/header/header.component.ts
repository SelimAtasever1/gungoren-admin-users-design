import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '@shared/users/services/users/users.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    
	@Output() inputSearchText : string;
	private searchSubject = new Subject<string>();

	constructor(private userservice : UsersService){}

    testForm = new FormGroup({
        testValue1: new FormControl(''),
    });

	onInputChange(event: Event) {
		const value = (event.target as HTMLInputElement).value;
		this.userservice.sendSearchText(value);
	}
	
}
