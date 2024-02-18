import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Unit } from '../enum/unit';
import { Price } from '../interface/price';
import { PriceWithPer100g } from '../interface/price-with-per-100g';
import { Product } from '../interface/product';
import { ProductResponse } from '../interface/productResponse';

@Injectable({ providedIn: 'root' })
export class ProductService {
	// To be replaces with the real API URL
	url = 'assets/chocolate-data.json';

	constructor(private readonly _http: HttpClient) {}

	getProducts(): Observable<ProductResponse> {
		return this._http.get<ProductResponse>(this.url).pipe(
			map(({ data, ...res }) => {
				data = data.map((product) => ({
					...product,
					lowestPrice100g: this.getLowestPricePer100Grams(product.prices),
					avgPrice100g: this._calculateAveragePricePer100Grams(product.prices),
				}));

				return { ...res, data };
			}),
		);
	}

	getProduct(id: string): Observable<Product> {
		return this._http.get<ProductResponse>(this.url).pipe(
			map(({ data }) => {
				const product = data.find(({ id: productId }) => productId === id) as Product;

				return {
					...product,
					lowestPrice100g: this.getLowestPricePer100Grams(product?.prices ?? []),
					avgPrice100g: this._calculateAveragePricePer100Grams(product?.prices ?? []),
				};
			}),
		);
	}

	updateProduct(product: Product) {
		// implementation pending a POST API
		return of(product).pipe(delay(1000));
	}

	getLowestPricePer100Grams(prices: Price[]): PriceWithPer100g | null {
		if (!prices.length) return null;

		return prices.reduce((lowestPrice, currPrice) => {
			const pricePer100g = this._calculatePricePer100g(currPrice);

			const lowestPricePer100g = lowestPrice ? this._calculatePricePer100g(lowestPrice) : Infinity;

			return pricePer100g < lowestPricePer100g ? { ...currPrice, pricePer100g } : lowestPrice;
		}, null as PriceWithPer100g | null);
	}

	private _calculateAveragePricePer100Grams(prices: Price[]): number | null {
		if (prices.length === 0) return null;

		const total = prices.reduce((sum, price) => {
			const pricePer100g = this._calculatePricePer100g(price);
			return sum + pricePer100g;
		}, 0);

		const average = total / prices.length;

		return parseFloat(average.toFixed(2));
	}

	private _calculatePricePer100g({ unit, amount, price }: Price): number {
		const factor = unit === Unit.Kg ? 1000 : 1;
		const pricePer100g = (price / (amount * factor)) * 100;
		return parseFloat(pricePer100g.toFixed(2));
	}
}
