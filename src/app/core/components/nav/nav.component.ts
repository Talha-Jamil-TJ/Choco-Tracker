import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzHeaderComponent } from 'ng-zorro-antd/layout';
import { BaseComponent } from '../../base/base.component';

@Component({
	selector: 'app-nav',
	standalone: true,
	imports: [CommonModule, NzHeaderComponent, NzIconDirective, RouterLink, NzBreadCrumbModule],
	templateUrl: './nav.component.html',
	styleUrl: './nav.component.scss',
})
export class NavComponent extends BaseComponent {}
