import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAvatarModule, TuiBadgeModule, TuiBadgedContentModule, TuiInputModule, TuiPaginationModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiHintModule, TuiRootModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { TuiBlockStatusModule } from '@taiga-ui/layout';

@NgModule({
	declarations: [
		FilterPipe
	],
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
		TuiHintModule,
		TuiTextfieldControllerModule,
		TuiBlockStatusModule
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
		TuiHintModule,
		FilterPipe,
		TuiTextfieldControllerModule,
		TuiBlockStatusModule
	],
})
export class SharedLayer {}
