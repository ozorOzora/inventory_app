"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductManager {
    constructor(repository) {
        this._repository = repository;
    }
    // Returns the whole collection
    findAll() {
        return this._repository.findAll();
    }
    // Inserts a product in the collection
    create(product) {
        this._repository.create(product);
    }
}
exports.ProductManager = ProductManager;
module.exports = function (repository) {
    return new ProductManager(repository);
};
//# sourceMappingURL=product.manager.js.map