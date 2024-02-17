import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from '@store/product/product.state';
import { OverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
	let component: OverviewComponent;
	let fixture: ComponentFixture<OverviewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [OverviewComponent, NgxsModule.forRoot([ProductState]), HttpClientTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(OverviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
