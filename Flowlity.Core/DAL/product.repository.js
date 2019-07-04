"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductRepository {
    constructor(collection) {
        this._collection = collection;
    }
    /// Returns the whole collection
    findAll() {
        return this._collection.find();
    }
    // Inserts a product in the collection
    create(product) {
        this._collection.insert(product);
    }
}
exports.ProductRepository = ProductRepository;
module.exports = function (collection) {
    return new ProductRepository(collection);
};
//# sourceMappingURL=product.repository.js.map