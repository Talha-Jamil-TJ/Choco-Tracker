import { Price } from './price';

export interface PriceWithPer100g extends Price {
	pricePer100g?: number;
}
