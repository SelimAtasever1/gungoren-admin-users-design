import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAvatarModule, TuiBadgeModule, TuiBadgedContentModule, TuiPaginationModule } from '@taiga-ui/kit';
import { TuiRootModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

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
		TuiTextfieldControllerModule
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
		TuiPaginationModule
	],
})
export class SharedLayer {}
