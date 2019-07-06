"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(_availabilityService) {
        this._availabilityService = _availabilityService;
        this.availabilities = [];
    }
    AppComponent.prototype.getAvailabilities = function (product) {
        var _this = this;
        this._availabilityService.findAll(product.id)
            .subscribe(function (availabilities) {
            console.log(availabilities);
            _this.availabilities = availabilities;
        });
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map