import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '@core/components/nav/nav.component';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
	standalone: true,
	imports: [RouterModule, NavComponent, NzLayoutModule, NzCardComponent],
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {}
