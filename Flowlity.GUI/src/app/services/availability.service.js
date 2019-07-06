"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AvailabilityService = /** @class */ (function () {
    function AvailabilityService(_http) {
        this._http = _http;
    }
    AvailabilityService.prototype.findAll = function (productId) {
        return this._http.get("/availabilities/" + productId);
    };
    AvailabilityService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AvailabilityService);
    return AvailabilityService;
}());
exports.AvailabilityService = AvailabilityService;
//# sourceMappingURL=availability.service.js.map