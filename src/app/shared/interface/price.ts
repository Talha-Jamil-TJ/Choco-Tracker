import { Unit } from '../enum/unit';

export interface Price {
	price: number;
	shop: string;
	link: string;
	unit: Unit;
	amount: number;
}
