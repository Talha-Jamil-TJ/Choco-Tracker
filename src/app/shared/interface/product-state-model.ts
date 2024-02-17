import { Pagination } from './pagination';
import { Product } from './product';
import { ProductResponse } from './productResponse';

export interface ProductStateModel extends Partial<ProductResponse> {
	pagination?: Pagination;
	data: Product[];
	isLoading?: boolean;
}
