import { Component } from '@angular/core';
import { Product } from './models/product';
import { AvailabilityService } from './services/availability.service';
import { Availability } from './models/availability';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent {
    availabilities: Availability[] = [];

    constructor(
        private _availabilityService: AvailabilityService
    ) { }

    getAvailabilities(product: Product) {
        this._availabilityService.findAll(product.id)
            .subscribe(availabilities => {
                console.log(availabilities);
                this.availabilities = availabilities
            })
    }
}
