import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Store } from '@ngxs/store';
import { Product } from '@shared/interface/product';
import { GetProducts } from '@store/product-list/product-list.action';
import { ProductListState } from '@store/product-list/product-list.state';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { map } from 'rxjs';
import { OverviewTestId } from './overview-test-id';

@Component({
	selector: 'app-overview',
	standalone: true,
	imports: [CommonModule, NzTableModule, NzButtonModule, NzCardModule, NzDividerComponent, NzIconDirective, RouterLink],
	templateUrl: './overview.component.html',
	styleUrl: './overview.component.scss',
})
export class OverviewComponent implements OnInit {
	data: Signal<Product[]>;
	isLoading: Signal<boolean>;

	OverviewTestId = OverviewTestId;

	constructor(private readonly _store: Store) {
		this.data = toSignal(_store.select(ProductListState.products), {
			initialValue: [],
		});

		this.isLoading = toSignal(_store.select(ProductListState.isLoading).pipe(map(Boolean)), {
			initialValue: false,
		});
	}

	ngOnInit() {
		if (!this._store.selectSnapshot(ProductListState.products).length) {
			this._store.dispatch(new GetProducts());
		}
	}
}
