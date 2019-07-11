"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var availability_dialog_component_1 = require("../availability-dialog/availability-dialog.component");
var AvailabilityTableComponent = /** @class */ (function () {
    function AvailabilityTableComponent(dialog) {
        this.dialog = dialog;
        this.availabilityUpdated = new core_1.EventEmitter();
        this.displayedColumns = ['name', 'inventory_level', 'date', 'actions'];
    }
    AvailabilityTableComponent.prototype.openDialog = function (availability) {
        var _this = this;
        var dialogRef = this.dialog.open(availability_dialog_component_1.AvailabilityDialogComponent, {
            width: '380px',
            data: { name: availability.productName, inventoryLevel: availability.inventoryLevel, date: availability.date }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result)
                return;
            availability.inventoryLevel = parseInt(result);
            _this.availabilityUpdated.emit(availability);
        });
    };
    tslib_1.__decorate([
        core_1.Input()
    ], AvailabilityTableComponent.prototype, "availabilities", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], AvailabilityTableComponent.prototype, "availabilityUpdated", void 0);
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