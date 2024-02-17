import { Brand } from '../enum/brand';
import { Currency } from '../enum/currency';
import { Nutrition } from './nutrition';
import { Price } from './price';
import { PriceWithPer100g } from './price-with-per-100g';

export interface Product {
	id: string;
	name: string;
	brand: Brand;
	currency: Currency;
	prices: Price[];
	nutrition: Nutrition;
	// Assigned at client side
	lowestPrice100g?: PriceWithPer100g | null;
	avgPrice100g?: number | null;
}
