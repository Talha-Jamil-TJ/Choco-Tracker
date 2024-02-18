import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppComponent, RouterTestingModule, NgxsModule.forRoot([])],
		}).compileComponents();

		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	});

	it(`should create'`, () => {
		expect(component).toBeTruthy();
	});
});
