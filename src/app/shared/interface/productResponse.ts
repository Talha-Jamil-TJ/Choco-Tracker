import { Pagination } from './pagination';
import { Product } from './product';

export interface ProductResponse {
	pagination: Pagination;
	data: Product[];
}
