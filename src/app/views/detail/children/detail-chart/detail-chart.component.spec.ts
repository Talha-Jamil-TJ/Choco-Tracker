import { input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { setResizeObserver } from '@shared/test/resize-observer.helper';
import { DetailChartComponent } from './detail-chart.component';

describe('DetailChartComponent', () => {
	let component: DetailChartComponent;
	let fixture: ComponentFixture<DetailChartComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DetailChartComponent],
		}).compileComponents();

		setResizeObserver();

		fixture = TestBed.createComponent(DetailChartComponent);
		component = fixture.componentInstance;

		component.chartLabels = input(['Label 1', 'Label 2']);
		component.chartDataList = input([1, 2]);

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
