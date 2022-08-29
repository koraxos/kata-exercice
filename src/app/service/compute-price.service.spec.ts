import {TestBed} from '@angular/core/testing';

import {ComputePriceService} from './compute-price.service';
import {chocolat as chocolat1, cd as cd1, book as book1} from "../data/exercice1";
import {parfum as parfum2, chocolate as chocolat2} from "../data/exercice2";
import {
	chocolat as chocolat3,
	parfum as parfum3,
	pills as pills3,
	parfumImported as parfumImported3
} from "../data/exercice3";

describe('ComputePriceService', () => {
	let service: ComputePriceService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ComputePriceService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('Exercice 1 should compute properly', () => {
		const bookPrice = service.getTTCPriceFromProduct(book1);
		expect(bookPrice).toEqual(13.74);

		const cdPrice = service.getTTCPriceFromProduct(cd1);
		expect(cdPrice).toEqual(17.99);

		const chocolatePrice = service.getTTCPriceFromProduct(chocolat1);
		expect(chocolatePrice).toEqual(0.85);

		const bookTotal = service.multiplyByProductQuantity(bookPrice, book1);
		expect(bookTotal).toEqual(27.48);
		const cdTotal = service.multiplyByProductQuantity(cdPrice, cd1);
		expect(cdTotal).toEqual(17.99);
		const chocolateTotal = service.multiplyByProductQuantity(chocolatePrice, chocolat1);
		expect(chocolateTotal).toEqual(2.55);

	});

	it('Exercice 2 should compute properly', () => {
		const chocolatePrice = service.getTTCPriceFromProduct(chocolat2)
		expect(chocolatePrice).toEqual(10.5);
		const parfumPrice = service.getTTCPriceFromProduct(parfum2)
		expect(parfumPrice).toEqual(59.38);

		const chocolateTotal = service.multiplyByProductQuantity(chocolatePrice, chocolat2);
		expect(chocolateTotal).toEqual(21)
		const parfumTotal = service.multiplyByProductQuantity(parfumPrice, parfum2);
		expect(parfumTotal).toEqual(178.14)
	});

	it('Exercice 3 should compute properly', () => {
		const parfumImportedPrice = service.getTTCPriceFromProduct(parfumImported3);
		expect(parfumImportedPrice).toEqual(34.99);
		const parfumPrice = service.getTTCPriceFromProduct(parfum3);
		expect(parfumPrice).toEqual(22.79);

		const pillsPrice = service.getTTCPriceFromProduct(pills3);
		expect(pillsPrice).toEqual(9.75);

		const chocolatePrice = service.getTTCPriceFromProduct(chocolat3);
		expect(chocolatePrice).toEqual(11.81);

		const parfumImportedTotal = service.multiplyByProductQuantity(parfumImportedPrice, parfumImported3);
		expect(parfumImportedTotal).toEqual(69.98);

		const parfumTotal = service.multiplyByProductQuantity(parfumPrice, parfum3);
		expect(parfumTotal).toEqual(22.79);

		const pillsTotal = service.multiplyByProductQuantity(pillsPrice, pills3);
		expect(pillsTotal).toEqual(29.25);

		const chocolateTotal = service.multiplyByProductQuantity(chocolatePrice, chocolat3);
		expect(chocolateTotal).toEqual(23.62);
	});

	it('Taxe  of Exerice 1 Should compute properly', () => {
		const bookTaxe = service.getTaxeFromProductType(book1);
		const cdTaxe = service.getTaxeFromProductType(cd1);
		const chocolateTaxe = service.getTaxeFromProductType(chocolat1);
		expect(bookTaxe).toEqual(1.25);
		expect(cdTaxe).toEqual(3);
		expect(chocolateTaxe).toEqual(0);
	});

	it('Taxe  of Exerice 2 Should compute properly', () => {
		const bookTaxe = service.getTaxeFromProductType(chocolat2);
		const cdTaxe = service.getTaxeFromProductType(parfum2);
		expect(cdTaxe).toEqual(11.88);
		expect(bookTaxe).toEqual(0.5);
	});

	it('Taxe  of Exerice31 Should compute properly', () => {
		const parfumTaxe = service.getTaxeFromProductType(parfum3);
		const parfumImportedTaxe = service.getTaxeFromProductType(parfumImported3);
		const chocolateTaxe = service.getTaxeFromProductType(chocolat3);
		const pillsTaxe = service.getTaxeFromProductType(pills3);
		expect(parfumTaxe).toEqual(3.8);
		expect(parfumImportedTaxe).toEqual(7);
		expect(chocolateTaxe).toEqual(0.56);
		expect(pillsTaxe).toEqual(0);
	});
});
