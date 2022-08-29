import {ComponentFixture, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {Exercice1Component} from "./exercice1/exercice1.component";
import {Exercice2Component} from "./exercice2/exercice2.component";
import {Exercice3Component} from "./exercice3/exercice3.component";

describe('AppComponent', () => {

	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
				declarations: [ AppComponent,
					Exercice1Component,
					Exercice2Component,
					Exercice3Component]
			})
			.compileComponents();

		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

});
