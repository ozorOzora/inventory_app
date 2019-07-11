"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var AvailabilityDialogComponent = /** @class */ (function () {
    function AvailabilityDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formGroup = new AvailabilityForm();
        this.inventoryLevel.setValue(data.inventoryLevel);
    }
    Object.defineProperty(AvailabilityDialogComponent.prototype, "inventoryLevel", {
        get: function () { return this.formGroup.get('inventoryLevel'); },
        enumerable: true,
        configurable: true
    });
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
var AvailabilityForm = /** @class */ (function (_super) {
    tslib_1.__extends(AvailabilityForm, _super);
    function AvailabilityForm() {
        return _super.call(this, {
            "inventoryLevel": new forms_1.FormControl('', [
                forms_1.Validators.required,
                function (field) {
                    return field.value % 1 == 0 ? null : { 'notAnInteger': true };
                }
            ])
        }) || this;
    }
    return AvailabilityForm;
}(forms_1.FormGroup));
exports.AvailabilityForm = AvailabilityForm;
//# sourceMappingURL=availability-dialog.component.js.map