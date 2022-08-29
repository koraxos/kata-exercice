import {Component, OnInit} from '@angular/core';
import {Product} from "../model/Product";
import {ComputePriceService} from "../service/compute-price.service";

import {parfum, chocolate} from "../data/exercice2";

@Component({
	selector: 'app-exercice2',
	templateUrl: './exercice2.component.html',
	styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {

	chocolate: Product = chocolate;
	parfum: Product = parfum;

	chocolateTotal: number = 0;
	parfumTotal: number = 0;

	total: number = 0;
	taxeTotal: number = 0;

	constructor(private computePriceService: ComputePriceService) {
	}

	ngOnInit(): void {
		const chocolatePrice = this.computePriceService.getTTCPriceFromProduct(this.chocolate)
		const parfumPrice = this.computePriceService.getTTCPriceFromProduct(this.parfum)

		this.chocolateTotal = this.computePriceService.multiplyByProductQuantity(chocolatePrice, this.chocolate);
		this.parfumTotal = this.computePriceService.multiplyByProductQuantity(parfumPrice, this.parfum);

		this.total = this.getTotal();
		this.taxeTotal = this.getTaxeTotal();
	}

	private getTaxeTotal(): number {
		return this.chocolate.quantity * this.computePriceService.getTaxeFromProductType(this.chocolate)
			+ this.parfum.quantity * this.computePriceService.getTaxeFromProductType(this.parfum)
	}

	private getTotal(): number {
		return this.chocolateTotal + this.parfumTotal;
	}
}
