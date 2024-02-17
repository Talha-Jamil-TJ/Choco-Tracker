import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngxs/store';
import { Product } from '@shared/interface/product';
import { GetProducts } from '@store/product/product.actions';
import { ProductState } from '@store/product/product.state';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { map } from 'rxjs';

@Component({
	selector: 'app-overview',
	standalone: true,
	imports: [CommonModule, NzTableModule, NzButtonModule, NzCardModule, NzDividerComponent, NzIconDirective],
	templateUrl: './overview.component.html',
	styleUrl: './overview.component.scss',
})
export class OverviewComponent implements OnInit {
	data: Signal<Product[]>;
	isLoading: Signal<boolean>;

	constructor(private readonly _store: Store) {
		this.data = toSignal(_store.select(ProductState.products), {
			initialValue: [],
		});

		this.isLoading = toSignal(_store.select(ProductState.isLoading).pipe(map(Boolean)), {
			initialValue: false,
		});
	}

	ngOnInit() {
		this._store.dispatch(new GetProducts());
	}
}
