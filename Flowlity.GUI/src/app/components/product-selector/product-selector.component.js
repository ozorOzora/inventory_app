"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ProductSelectorComponent = /** @class */ (function () {
    function ProductSelectorComponent(_productService) {
        this._productService = _productService;
        this.productSelected = new core_1.EventEmitter();
    }
    ProductSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.findAll().subscribe(function (products) { _this.products = products; });
    };
    ProductSelectorComponent.prototype.selectProduct = function (selectedChange) {
        console.log(selectedChange.value);
        this.productSelected.emit(selectedChange.value);
    };
    tslib_1.__decorate([
        core_1.Output()
    ], ProductSelectorComponent.prototype, "productSelected", void 0);
    ProductSelectorComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-product-selector',
            templateUrl: './product-selector.component.html',
            styleUrls: ['./product-selector.component.css']
        })
    ], ProductSelectorComponent);
    return ProductSelectorComponent;
}());
exports.ProductSelectorComponent = ProductSelectorComponent;
//# sourceMappingURL=product-selector.component.js.map