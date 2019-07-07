import { Component } from '@angular/core';
import { Product } from './models/product';
import { AvailabilityService } from './services/availability.service';
import { Availability } from './models/availability';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    availabilities: Availability[] = [];

    constructor(
        private _availabilityService: AvailabilityService
    ) { }

    getAvailabilities(productId: number) {
        this._availabilityService.findAll(productId)
            .subscribe(availabilities => {
                this.availabilities = availabilities;
            });
    }

    productSelected(product) {
        this.getAvailabilities(product.id)
    }

    updateAvailability(availability: Availability) {
        this._availabilityService.update(availability).subscribe(() => {
            this.getAvailabilities(availability.productId);
        });
    }

}
