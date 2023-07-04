import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedLayer } from '@shared/shared.layer';
import { AppComponent } from './components/app/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
	imports: [
		AppRoutingModule,
		SharedLayer
	],
	declarations: [
		AppComponent,
		NotFoundComponent
	]
})
export class AppLayout {}
