import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import {
	BarChartOutline,
	BorderlessTableOutline,
	ExportOutline,
	FileTextOutline,
} from '@ant-design/icons-angular/icons';
import { NgxsModule } from '@ngxs/store';
import { ProductListState } from '@store/product-list/product-list.state';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { appRoutes } from './app.routes';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(appRoutes),
		provideNzI18n(en_US),
		importProvidersFrom(FormsModule),
		importProvidersFrom(HttpClientModule),
		provideAnimations(),
		importProvidersFrom(
			NzIconModule.forRoot([BarChartOutline, BorderlessTableOutline, FileTextOutline, ExportOutline]),
		),
		importProvidersFrom(NgxsModule.forRoot([ProductListState])),
	],
};
