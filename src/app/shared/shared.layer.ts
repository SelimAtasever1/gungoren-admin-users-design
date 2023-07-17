import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAvatarModule, TuiBadgeModule, TuiBadgedContentModule, TuiInputModule, TuiPaginationModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiHintModule, TuiRootModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		TuiBadgedContentModule,
		TuiAvatarModule,
		TuiBadgeModule,
		TuiRootModule,
		TuiPaginationModule,
		TuiTextfieldControllerModule,
		TuiTextAreaModule,
		TuiInputModule,
		TuiHintModule
	],
	exports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		TuiBadgedContentModule,
		TuiAvatarModule,
		TuiBadgeModule,
		TuiRootModule,
		TuiPaginationModule,
		TuiTextAreaModule,
		TuiInputModule,
		TuiHintModule
	],
})
export class SharedLayer {}
