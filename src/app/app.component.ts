import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '@shared/components/nav/nav.component';
import { NzLayoutComponent } from 'ng-zorro-antd/layout';

@Component({
	standalone: true,
	imports: [RouterModule, NavComponent, NzLayoutComponent],
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {}
