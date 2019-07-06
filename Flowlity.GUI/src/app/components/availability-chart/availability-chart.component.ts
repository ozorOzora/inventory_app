import { Component, OnInit, Input } from '@angular/core';
import { Availability } from '../../models/availability';

@Component({
    selector: 'app-availability-chart',
    templateUrl: './availability-chart.component.html',
    styleUrls: ['./availability-chart.component.css']
})
export class AvailabilityChartComponent implements OnInit {
    @Input() availabilities: Availability[];

    constructor() { }

    ngOnInit() {
    }

}
