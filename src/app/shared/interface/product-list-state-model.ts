import { Pagination } from './pagination';
import { Product } from './product';

export interface ProductListStateModel {
	pagination: Pagination | null;
	products: Product[];
	isLoading?: boolean;
}
