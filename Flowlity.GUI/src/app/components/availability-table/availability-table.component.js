"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AvailabilityTableComponent = /** @class */ (function () {
    function AvailabilityTableComponent() {
        this.displayedColumns = ['name', 'inventory_level', 'date'];
    }
    AvailabilityTableComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        core_1.Input()
    ], AvailabilityTableComponent.prototype, "availabilities", void 0);
    AvailabilityTableComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-availability-table',
            templateUrl: './availability-table.component.html',
            styleUrls: ['./availability-table.component.css']
        })
    ], AvailabilityTableComponent);
    return AvailabilityTableComponent;
}());
exports.AvailabilityTableComponent = AvailabilityTableComponent;
//# sourceMappingURL=availability-table.component.js.map