import { LocationStrategy, PathLocationStrategy, registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/tr';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { API_URL } from '@rilke/common/api';
import { environment } from '@env';

registerLocaleData(locale);

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		AppRoutingModule,
	],
	providers: [
		{ provide: LocationStrategy, useClass: PathLocationStrategy },
		{ provide: LOCALE_ID, useValue: 'tr' },
		{ provide: API_URL, useValue: environment.apiUrl },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
