import {Product, ProductType} from "../model/Product";

export const chocolate: Product = {
	priceHT: 10,
	productType: ProductType.MANDATORY,
	isImported: true,
	quantity: 2
}

export const parfum: Product = {
	priceHT: 47.50,
	isImported: true,
	productType: ProductType.STANDARD,
	quantity: 3
}
