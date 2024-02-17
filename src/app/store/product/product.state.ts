import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ProductStateModel } from '@shared/interface/product-state-model';
import { firstValueFrom } from 'rxjs';
import { GetProducts } from './product.actions';
import { ProductService } from './product.service';

@State<ProductStateModel>({
	name: 'product',
	defaults: {
		data: [],
		pagination: undefined,
		isLoading: false,
	},
})
@Injectable({ providedIn: 'root' })
export class ProductState {
	constructor(private readonly _service: ProductService) {}

	@Selector()
	static isLoading(state: ProductStateModel) {
		return state.isLoading;
	}

	@Selector()
	static products(state: ProductStateModel) {
		return state.data;
	}

	@Action(GetProducts)
	async getChocolateData({ patchState }: StateContext<ProductStateModel>) {
		patchState({ isLoading: true });

		const data: ProductStateModel = await firstValueFrom(this._service.getProducts());

		patchState({ ...data, isLoading: false });
	}
}
