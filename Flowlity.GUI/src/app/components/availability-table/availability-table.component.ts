import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Availability } from 'src/app/models/availability';
import { MatDialog } from '@angular/material';
import { AvailabilityDialogComponent } from '../availability-dialog/availability-dialog.component';

@Component({
    selector: 'app-availability-table',
    templateUrl: './availability-table.component.html',
    styleUrls: ['./availability-table.component.css']
})
export class AvailabilityTableComponent {
    @Input() availabilities: Availability[];
    @Output() availabilityUpdated: EventEmitter<Availability> = new EventEmitter();
    displayedColumns = ['name', 'inventory_level', 'date', 'actions']

    constructor(
        public dialog: MatDialog
    ) { }

    openDialog(availability: Availability) {
        const dialogRef = this.dialog.open(AvailabilityDialogComponent, {
            width: '380px',
            data: { name: availability.productName, inventoryLevel: availability.inventoryLevel, date: availability.date }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (!result) return;

            availability.inventoryLevel = parseInt(result);
            this.availabilityUpdated.emit(availability);
        });
    }

}
