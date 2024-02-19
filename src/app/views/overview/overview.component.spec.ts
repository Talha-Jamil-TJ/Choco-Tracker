import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { getElementHelper, getElementsHelper } from '@shared/test/get-element.helper';
import { productsMock } from '@shared/test/products.mock';
import { ProductListState } from '@store/product-list/product-list.state';
import { OverviewTestId } from './overview-test-id';
import { OverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
	let component: OverviewComponent;
	let fixture: ComponentFixture<OverviewComponent>;
	const products = productsMock;

	const getElement = <T extends HTMLElement>(selector: OverviewTestId | string) =>
		getElementHelper<T>(fixture, selector);
	const getElements = <T extends HTMLElement>(selector: OverviewTestId | string) =>
		getElementsHelper<T>(fixture, selector);

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				OverviewComponent,
				NgxsModule.forRoot([ProductListState]),
				HttpClientTestingModule,
				RouterTestingModule.withRoutes([
					{
						path: ':id',
						loadComponent: () => import('../../shared/test/mock.component').then(({ MockComponent }) => MockComponent),
					},
				]),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(OverviewComponent);
		component = fixture.componentInstance;

		component.data = signal(productsMock);

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render table', () => {
		const element = getElement(OverviewTestId.Table);

		expect(element).toBeTruthy();
	});

	it('should render all table rows', () => {
		const element = getElements(OverviewTestId.TableRow);

		expect(element.length).toEqual(component.data().length);
	});

	for (let i = 0; i < products.length; i++) {
		const product = products[i];

		describe(`Table row for product ${product.id} - ${product.name}`, () => {
			it(`should render correct name`, () => {
				const nameRow = getElement(OverviewTestId.NameRow + i);

				expect(nameRow.textContent).toEqual(product.name);
			});

			it(`should render correct brand`, () => {
				const brandRow = getElement(OverviewTestId.BrandRow + i);

				expect(brandRow.textContent).toEqual(product.brand);
			});

			it(`should render correct lowestPricePer100g`, () => {
				const lowestPricePer100gRow = getElement(OverviewTestId.LowestPricePer100gRow + i);

				expect(lowestPricePer100gRow.textContent?.trim()).toEqual(
					product.lowestPrice100g?.pricePer100g?.toString() ?? '',
				);
			});

			it(`should render correct averagePricePer100g`, () => {
				const averagePricePer100gRow = getElement(OverviewTestId.AveragePricePer100gRow + i);

				expect(averagePricePer100gRow.textContent).toEqual(product.avgPrice100g?.toString() ?? '');
			});

			it(`should render correct cheapest shop`, () => {
				const cheapestShopRow = getElement(OverviewTestId.CheapestShopRow + i);

				const value = cheapestShopRow.textContent;

				expect(value ? value : undefined).toEqual(product.lowestPrice100g?.shop);
			});

			it(`should render correct details link`, async () => {
				const location = TestBed.inject(Location);

				const detailsRow = getElement<HTMLTableCellElement>(OverviewTestId.DetailsRow + i);

				const button = detailsRow.querySelector('button');

				button?.click();

				await fixture.whenStable();

				expect(location.path()).toBe('/' + product.id);
			});
		});
	}
});
