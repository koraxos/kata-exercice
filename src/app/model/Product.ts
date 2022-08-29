export interface Product{
	productType:ProductType,
    priceHT:number,
	isImported:boolean,
	taxe?:number,
	prixTTC?:number,
	quantity:number
}

export enum ProductType {
	MANDATORY,
	BOOK,
	STANDARD
}
