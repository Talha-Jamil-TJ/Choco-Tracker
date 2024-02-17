import { Route } from '@angular/router';

export const appRoutes: Route[] = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () =>
			import('./views/overview/overview.component').then(({ OverviewComponent }) => OverviewComponent),
	},
];
