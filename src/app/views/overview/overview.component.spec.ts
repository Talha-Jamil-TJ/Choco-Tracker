import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { ProductListState } from '@store/product-list/product-list.state';
import { OverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
	let component: OverviewComponent;
	let fixture: ComponentFixture<OverviewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [OverviewComponent, NgxsModule.forRoot([ProductListState]), HttpClientTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(OverviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
