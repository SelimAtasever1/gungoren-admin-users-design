import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPage } from './pages/users/users.page';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'users' }, { path: 'users', component: UsersPage, title: 'Users' }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UsersRoutingModule {}