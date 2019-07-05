"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductManager = /** @class */ (function () {
    function ProductManager(repository) {
        this._repository = repository;
    }
    // Returns the whole collection
    ProductManager.prototype.findAll = function () {
        return this._repository.findAll();
    };
    // Inserts a product in the collection
    ProductManager.prototype.create = function (product) {
        this._repository.create(product);
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
module.exports = function (repository) {
    return new ProductManager(repository);
};
//# sourceMappingURL=product.manager.js.map