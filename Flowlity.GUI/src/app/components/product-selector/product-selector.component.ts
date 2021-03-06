import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from "@angular/material"
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
    selector: 'app-product-selector',
    templateUrl: './product-selector.component.html',
    styleUrls: ['./product-selector.component.css']
})
export class ProductSelectorComponent implements OnInit {
    @Output() productSelected: EventEmitter<Product> = new EventEmitter()
    products: Product[];
    constructor(
        private _productService: ProductService
    ) { }

    ngOnInit() {
        this._productService.findAll().subscribe(
            products => { this.products = products }
        )
    }

    selectProduct(selectedChange: MatSelectChange) {
        this.productSelected.emit(selectedChange.value);
    }

}
