import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Store } from '@ngxs/store';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzHeaderComponent } from 'ng-zorro-antd/layout';
import { filter } from 'rxjs';
import { BaseComponent } from '../../base/base.component';

@Component({
	selector: 'app-nav',
	standalone: true,
	imports: [CommonModule, NzHeaderComponent, NzIconDirective, RouterLink, NzBreadCrumbModule],
	templateUrl: './nav.component.html',
	styleUrl: './nav.component.scss',
})
export class NavComponent extends BaseComponent implements OnInit {
	productId = signal('');

	constructor(private _router: Router, private _store: Store) {
		super();
	}

	ngOnInit() {
		this._router.events
			.pipe(
				filter((events): events is NavigationEnd => events instanceof NavigationEnd),
				this.takeUntilDestroy(),
			)
			.subscribe((params) => {
				const [, id] = params.urlAfterRedirects.split('/');

				this.productId.set(id);
			});
	}
}
