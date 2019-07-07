"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var AvailabilityDialogComponent = /** @class */ (function () {
    function AvailabilityDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AvailabilityDialogComponent.prototype.ngOnInit = function () {
    };
    AvailabilityDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    AvailabilityDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-availability-dialog',
            templateUrl: './availability-dialog.component.html',
            styleUrls: ['./availability-dialog.component.css']
        }),
        tslib_1.__param(1, core_1.Inject(material_1.MAT_DIALOG_DATA))
    ], AvailabilityDialogComponent);
    return AvailabilityDialogComponent;
}());
exports.AvailabilityDialogComponent = AvailabilityDialogComponent;
//# sourceMappingURL=availability-dialog.component.js.map