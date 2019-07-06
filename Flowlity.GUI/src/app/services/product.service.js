"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ProductService = /** @class */ (function () {
    function ProductService(_http) {
        this._http = _http;
    }
    ProductService.prototype.findAll = function () {
        return this._http.get('/products');
    };
    ProductService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map