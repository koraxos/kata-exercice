import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {Exercice1Component} from './exercice1/exercice1.component';
import {Exercice2Component} from "./exercice2/exercice2.component";
import {Exercice3Component} from "./exercice3/exercice3.component";

@NgModule({
	declarations: [
		AppComponent,
		Exercice1Component,
		Exercice2Component,
		Exercice3Component
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatToolbarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
