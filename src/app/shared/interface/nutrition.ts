import { Carbohydrates } from './carbohydrates';

import { Fat } from './fat';

export interface Nutrition {
	fat: Fat;
	carbohydrates: Carbohydrates;
	protein: number;
	salt: number;
}
