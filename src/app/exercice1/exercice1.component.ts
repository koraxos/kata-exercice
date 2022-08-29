import {Component, OnInit} from '@angular/core';
import {Product} from "../model/Product";
import {ComputePriceService} from "../service/compute-price.service";
import {chocolat, cd, book} from "../data/exercice1";

@Component({
	selector: 'app-exercice1',
	templateUrl: './exercice1.component.html',
	styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {


	book: Product = book;
	cd: Product = cd;
	chocolat: Product = chocolat

	bookTotal: number = 0;
	cdTotal: number = 0;
	chocolateTotal: number = 0;

	total: number = 0;
	taxeTotal: number = 0;

	constructor(private computePriceService: ComputePriceService) {
	}

	ngOnInit(): void {
		const bookPrice = this.computePriceService.getTTCPriceFromProduct(this.book);
		const cdPrice = this.computePriceService.getTTCPriceFromProduct(this.cd);
		const chocolatePrice = this.computePriceService.getTTCPriceFromProduct(this.chocolat);

		this.bookTotal = this.computePriceService.multiplyByProductQuantity(bookPrice, this.book);
		this.cdTotal = this.computePriceService.multiplyByProductQuantity(cdPrice, this.cd);
		this.chocolateTotal = this.computePriceService.multiplyByProductQuantity(chocolatePrice, this.chocolat);

		this.total = this.getTotal();
		this.taxeTotal = this.getTaxeTotal();
	}

	private getTotal(): number {
		return Number((this.bookTotal + this.cdTotal + this.chocolateTotal).toFixed(2));
	}

	private getTaxeTotal(): number {
		return this.formattedNumber(this.book) +
			+this.formattedNumber(this.cd)
			+ this.formattedNumber(this.chocolat);
	}

	formattedNumber(product: Product): number {
		return Number((product.quantity * this.computePriceService.getTaxeFromProductType(product)).toFixed(2));
	}

}
