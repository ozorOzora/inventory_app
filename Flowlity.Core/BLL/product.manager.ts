import { Product } from "../BO/product";
import { ProductRepository } from "../DAL/product.repository";

export class ProductManager {

    private _repository: ProductRepository;
    constructor(repository) {
        this._repository = repository;
    }

    // Returns the whole collection
    findAll(): Product[] {
        return this._repository.findAll();
    }

    // Inserts a product in the collection
    create(product: Product): void {
        this._repository.create(product);
    }
}

module.exports = function (repository: ProductRepository) {
    return new ProductManager(repository);
}