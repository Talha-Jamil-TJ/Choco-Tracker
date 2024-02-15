import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzHeaderComponent } from 'ng-zorro-antd/layout';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';

@Component({
	selector: 'app-nav',
	standalone: true,
	imports: [CommonModule, NzHeaderComponent, NzIconDirective, NzMenuDirective, NzMenuItemComponent, RouterLink],
	templateUrl: './nav.component.html',
	styleUrl: './nav.component.scss',
})
export class NavComponent {}
