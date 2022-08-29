import {Product, ProductType} from "../model/Product";

export const book: Product = {
	priceHT: 12.49,
	productType: ProductType.BOOK,
	isImported: false,
	quantity: 2

}

export const cd: Product = {
	priceHT: 14.99,
	productType: ProductType.STANDARD,
	isImported: false,
	quantity: 1
}

export const chocolat: Product = {
	priceHT: 0.85,
	productType: ProductType.MANDATORY,
	isImported: false,
	quantity: 3
}
