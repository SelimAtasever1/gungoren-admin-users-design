import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    
    testForm = new FormGroup({
        testValue1: new FormControl('A field', Validators.required),
    });
	
}
