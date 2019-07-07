import { Component, OnInit, Input } from '@angular/core';
import { Availability } from '../../models/availability';
import { ChartComponent, ApexChart, ApexAxisChartSeries, ApexDataLabels, ApexXAxis, ApexYAxis, ApexFill } from 'ng-apexcharts';

@Component({
    selector: 'app-availability-chart',
    templateUrl: './availability-chart.component.html',
    styleUrls: ['./availability-chart.component.css']
})
export class AvailabilityChartComponent implements OnInit {
    @Input() availabilities: Availability[];
    series: ApexAxisChartSeries
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    fill: ApexFill;

    constructor() { }

    ngOnInit() {
        this.chart = {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true
            },
            toolbar: {
                show: false,
                autoSelected: 'pan'
            }
        };
        this.dataLabels = {
            enabled: false
        };
        this.xaxis = {
            type: "datetime"
        };
        this.fill = {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0,
                stops: [0, 100]
            }
        };
        this.yaxis = {
            min: 0,
            max: 100,
            title: {
                text: "Inventory level"
            }
        };
    }

    ngOnChanges() {
        this.series = [{
            name: "Inventory level",
            data: this.availabilities.map(availability => {
                return {
                    x: new Date(availability.date).getTime() as unknown as string, // ng-apexcharts thinks x's type is string, it shouldn't be
                    y: availability.inventoryLevel
                }
            })
        }];
    }

}
