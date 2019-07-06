import { Component, OnInit, Input } from '@angular/core';
import { Availability } from 'src/app/models/availability';
import { DataSource } from '@angular/cdk/table';

@Component({
    selector: 'app-availability-table',
    templateUrl: './availability-table.component.html',
    styleUrls: ['./availability-table.component.css']
})
export class AvailabilityTableComponent implements OnInit {
    @Input() availabilities: Availability[];
    dataSource: DataSource<Availability>;
    displayedColumns = ['name','inventory_level','date']

    constructor() { }

    ngOnInit() {
    }

}
