import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Store } from '@ngxs/store';
import { GetProductDetail } from '@store/product-detail/product-detail.action';
import { ProductDetailState } from '@store/product-detail/product-detail.state';
import { map, withLatestFrom } from 'rxjs';
import { Product } from '../interface/product';

export const productDetailResolver: ResolveFn<Product> = (route: ActivatedRouteSnapshot) => {
	const store = inject(Store);

	return store.dispatch(new GetProductDetail(route.paramMap.get('id') as string)).pipe(
		withLatestFrom(store.select(ProductDetailState.product)),
		map(([, product]) => product as Product),
	);
};
