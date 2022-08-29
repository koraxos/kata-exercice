import {Component, OnInit} from '@angular/core';
import {Product} from "../model/Product";
import {ComputePriceService} from "../service/compute-price.service";
import {parfumImported,parfum,pills,chocolat} from "../data/exercice3";

@Component({
	selector: 'app-exercice3',
	templateUrl: './exercice3.component.html',
	styleUrls: ['./exercice3.component.scss']
})
export class Exercice3Component implements OnInit {


	parfumImported: Product = parfumImported;
	parfum: Product = parfum;
	pills: Product = pills;
	chocolat: Product = chocolat;

	parfumImportedTotal: number = 0;
	parfumTotal: number = 0;
	pillsTotal: number = 0;
	chocolateTotal: number = 0;

	total:number=0;
	taxeTotal:number=0;

	constructor(private computePriceService: ComputePriceService) {
	}

	ngOnInit(): void {

		const parfumImportedPrice = this.computePriceService.getTTCPriceFromProduct(this.parfumImported)
		const parfumPrice = this.computePriceService.getTTCPriceFromProduct(this.parfum)
		const pillsPrice = this.computePriceService.getTTCPriceFromProduct(this.pills)
		const chocolatePrice = this.computePriceService.getTTCPriceFromProduct(this.chocolat)

		this.parfumImportedTotal = this.computePriceService.multiplyByProductQuantity(parfumImportedPrice, this.parfumImported);
		this.parfumTotal = this.computePriceService.multiplyByProductQuantity(parfumPrice, this.parfum);
		this.pillsTotal = this.computePriceService.multiplyByProductQuantity(pillsPrice, this.pills);
		this.chocolateTotal = this.computePriceService.multiplyByProductQuantity(chocolatePrice, this.chocolat);

		this.total = this.getTotal();
		this.taxeTotal = this.getTaxeTotal();
	}

	private getTotal() {
		return this.parfumImportedTotal + this.parfumTotal + this.pillsTotal + this.chocolateTotal;
	}

	private getTaxeTotal(): number {
		return this.parfumImported.quantity * this.computePriceService.getTaxeFromProductType(this.parfumImported)
			+ this.parfum.quantity * this.computePriceService.getTaxeFromProductType(this.parfum)
			+ this.pills.quantity * this.computePriceService.getTaxeFromProductType(this.pills)
			+ this.chocolat.quantity * this.computePriceService.getTaxeFromProductType(this.chocolat);
	}

}
