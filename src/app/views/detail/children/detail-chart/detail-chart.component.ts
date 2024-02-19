import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NgChartsModule } from 'ng2-charts';

@Component({
	selector: 'app-detail-chart',
	standalone: true,
	imports: [CommonModule, NgChartsModule, NzTypographyModule],
	templateUrl: './detail-chart.component.html',
	styleUrl: './detail-chart.component.scss',
})
export class DetailChartComponent implements OnInit {
	title = input.required<string>();
	chartLabels = input.required<string[]>();
	chartDataList = input.required<number[]>();

	chartType: ChartType = 'pie';

	chartData!: ChartData<'pie'>;

	ngOnInit() {
		this.chartData = {
			labels: this.chartLabels(),
			datasets: [
				{
					data: this.chartDataList() as number[],
				},
			],
		};
	}
}
