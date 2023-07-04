import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { SharedLayer } from '@shared/shared.layer';
import { UsersPage } from './pages/users/users.page';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
	imports: [
		UsersRoutingModule,
		SharedLayer
	],
	declarations: [
		UsersPage,
		UserListComponent,
		UserItemComponent
	]
})
export class UsersFeature {}
