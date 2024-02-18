import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ProductListStateModel } from '@shared/interface/product-list-state-model';
import { ProductService } from '@shared/service/product.service';
import { firstValueFrom } from 'rxjs';
import { GetProducts } from './product-list.action';

@State<ProductListStateModel>({
	name: 'products',
	defaults: {
		products: [],
		pagination: null,
		isLoading: false,
	},
})
@Injectable({ providedIn: 'root' })
export class ProductListState {
	constructor(private readonly _service: ProductService) {}

	@Selector()
	static isLoading(state: ProductListStateModel) {
		return state.isLoading;
	}

	@Selector()
	static products(state: ProductListStateModel) {
		return state.products;
	}

	@Action(GetProducts)
	async getChocolateData({ patchState }: StateContext<ProductListStateModel>) {
		patchState({ isLoading: true });

		const { data: products, ...res } = await firstValueFrom(this._service.getProducts());

		patchState({ ...res, products, isLoading: false });
	}
}
