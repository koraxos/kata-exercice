import {Product, ProductType} from "../model/Product";

export const parfumImported: Product = {
	priceHT: 27.99,
	productType: ProductType.STANDARD,
	isImported: true,
	quantity: 2
}

export const parfum: Product = {
	priceHT: 18.99,
	productType: ProductType.STANDARD,
	isImported: false,
	quantity: 1
}

export const pills: Product = {
	priceHT: 9.75,
	productType: ProductType.MANDATORY,
	isImported: false,
	quantity: 3
}

export const chocolat: Product = {
	priceHT: 11.25,
	productType: ProductType.MANDATORY,
	isImported: true,
	quantity: 2
}
