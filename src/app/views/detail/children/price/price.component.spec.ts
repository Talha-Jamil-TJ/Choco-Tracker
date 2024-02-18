import { input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Price } from '@shared/interface/price';
import { PriceComponent } from './price.component';

describe('PriceComponent', () => {
	let component: PriceComponent;
	let fixture: ComponentFixture<PriceComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PriceComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PriceComponent);
		component = fixture.componentInstance;
		component.prices = input([] as Price[]);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
