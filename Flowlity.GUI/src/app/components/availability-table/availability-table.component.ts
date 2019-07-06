import { Component, Input } from '@angular/core';
import { Availability } from 'src/app/models/availability';

@Component({
    selector: 'app-availability-table',
    templateUrl: './availability-table.component.html',
    styleUrls: ['./availability-table.component.css']
})
export class AvailabilityTableComponent {
    @Input() availabilities: Availability[];
    displayedColumns = ['name', 'inventory_level', 'date']

    constructor() { }

    ngOnChanges() {
        console.log(this.availabilities);
    }

}
