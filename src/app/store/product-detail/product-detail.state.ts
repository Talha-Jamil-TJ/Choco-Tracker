import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Product } from '@shared/interface/product';
import { ProductDetailStateModel } from '@shared/interface/product-detail-state-model';
import { ProductService } from '@shared/service/product.service';
import { firstValueFrom } from 'rxjs';
import { GetProductDetail, UpdateProductDetail } from './product-detail.action';

@State<ProductDetailStateModel>({
	name: 'product',
	defaults: {
		product: null,
	},
})
@Injectable({ providedIn: 'root' })
export class ProductDetailState {
	constructor(private readonly _service: ProductService) {}

	@Selector()
	static product(state: ProductDetailStateModel) {
		return state.product;
	}

	@Action(GetProductDetail)
	async getProductDetail({ patchState }: StateContext<ProductDetailStateModel>, { id }: GetProductDetail) {
		const product = await firstValueFrom(this._service.getProduct(id));

		patchState({ product });
	}

	@Action(UpdateProductDetail)
	async updateProductDetail(
		{ patchState, getState }: StateContext<ProductDetailStateModel>,
		{ product }: UpdateProductDetail,
	) {
		const state = getState();

		const updatedProduct = await firstValueFrom(
			this._service.updateProduct({ ...(state.product as Product), ...product }),
		);

		patchState({ product: updatedProduct });
	}
}
