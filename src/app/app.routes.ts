import { importProvidersFrom } from '@angular/core';
import { Route } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { productDetailResolver } from '@shared/resolver/product-detail.resolver';
import { ProductDetailState } from '@store/product-detail/product-detail.state';

export const appRoutes: Route[] = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () =>
			import('./views/overview/overview.component').then(({ OverviewComponent }) => OverviewComponent),
	},
	{
		path: ':id',
		providers: [importProvidersFrom(NgxsModule.forFeature([ProductDetailState]))],
		resolve: { data: productDetailResolver },
		loadComponent: () => import('./views/detail/detail.component').then(({ DetailComponent }) => DetailComponent),
	},
];
