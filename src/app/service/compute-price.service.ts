import {Injectable} from '@angular/core';
import {Product, ProductType} from "../model/Product";

@Injectable({
	providedIn: 'root'
})
export class ComputePriceService {

	constructor() {
	}

	multiplyByProductQuantity(price: number, product: Product) {
		return Number( (price * product.quantity).toFixed(2));
	}

	getTaxeFromProductType(product: Product): number {
		let result
		switch (product.productType) {
			case(ProductType.STANDARD):
				if (product.isImported) {
					result = product.priceHT * 0.25;
				} else {
					result = product.priceHT * 0.2;
				}
				break;
			case(ProductType.BOOK):
				if (product.isImported) {
					result = product.priceHT * 0.15;
				} else {
					result = product.priceHT * 0.10;
				}
				break;
			case(ProductType.MANDATORY):
				if (product.isImported) {
					result = product.priceHT * 0.05;
				} else {
					result = 0;
				}
				break;
		}

		if (result.toString().indexOf('.') != -1) {
			const decimal = ( result - Math.floor(result))*100;
			if (decimal % 5 > 0) {
				const decimalRounded = Math.round(decimal);
				const decimalPartRounded= Number(Number(decimalRounded*0.01).toFixed(2));
				return result - decimal / 100 + decimalPartRounded;
			}
		}
		return Number(result.toFixed(2));
	}

	getTTCPriceFromProduct(product: Product): number {
		return Number((product.priceHT + this.getTaxeFromProductType(product)).toFixed(2));
	}

}
