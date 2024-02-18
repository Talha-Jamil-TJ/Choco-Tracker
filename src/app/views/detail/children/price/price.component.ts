import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Price } from '@shared/interface/price';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
	selector: 'app-price',
	standalone: true,
	imports: [CommonModule, NzButtonComponent, NzTableModule, NzIconDirective],
	templateUrl: './price.component.html',
	styleUrl: './price.component.scss',
})
export class PriceComponent {
	prices = input.required<Price[]>();
}
