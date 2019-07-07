"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(_availabilityService) {
        this._availabilityService = _availabilityService;
        this.availabilities = [];
    }
    AppComponent.prototype.getAvailabilities = function (productId) {
        var _this = this;
        this._availabilityService.findAll(productId)
            .subscribe(function (availabilities) {
            _this.availabilities = availabilities;
        });
    };
    AppComponent.prototype.productSelected = function (product) {
        this.getAvailabilities(product.id);
    };
    AppComponent.prototype.updateAvailability = function (availability) {
        var _this = this;
        this._availabilityService.update(availability).subscribe(function () {
            _this.getAvailabilities(availability.productId);
        });
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map