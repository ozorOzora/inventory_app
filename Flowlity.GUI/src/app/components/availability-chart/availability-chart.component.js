"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AvailabilityChartComponent = /** @class */ (function () {
    function AvailabilityChartComponent() {
    }
    AvailabilityChartComponent.prototype.ngOnInit = function () {
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
    };
    AvailabilityChartComponent.prototype.ngOnChanges = function () {
        this.series = [{
                name: "Inventory level",
                data: this.availabilities.map(function (availability) {
                    return {
                        x: new Date(availability.date).getTime(),
                        y: availability.inventoryLevel
                    };
                })
            }];
    };
    tslib_1.__decorate([
        core_1.Input()
    ], AvailabilityChartComponent.prototype, "availabilities", void 0);
    AvailabilityChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-availability-chart',
            templateUrl: './availability-chart.component.html',
            styleUrls: ['./availability-chart.component.css']
        })
    ], AvailabilityChartComponent);
    return AvailabilityChartComponent;
}());
exports.AvailabilityChartComponent = AvailabilityChartComponent;
//# sourceMappingURL=availability-chart.component.js.map