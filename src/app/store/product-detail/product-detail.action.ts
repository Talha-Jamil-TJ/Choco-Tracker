import { Product } from '@shared/interface/product';

export class GetProductDetail {
	static readonly type = '[Product] Get Product Detail';
	constructor(public id: string) {}
}

export class UpdateProductDetail {
	static readonly type = '[Product] Update Product Detail';
	constructor(public product: Partial<Product>) {}
}
