"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductRepository = /** @class */ (function () {
    function ProductRepository(collection) {
        this._collection = collection;
    }
    /// Returns the whole collection
    ProductRepository.prototype.findAll = function () {
        return this._collection.find();
    };
    // Inserts a product in the collection
    ProductRepository.prototype.create = function (product) {
        this._collection.insert(product);
    };
    return ProductRepository;
}());
exports.ProductRepository = ProductRepository;
module.exports = function (collection) {
    return new ProductRepository(collection);
};
//# sourceMappingURL=product.repository.js.map