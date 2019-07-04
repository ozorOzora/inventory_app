import { Product } from "../BO/product";

export class ProductRepository {

    private _collection: Collection<Product>;
    constructor(collection) {
        this._collection = collection;
    }

    /// Returns the whole collection
    findAll(): Product[] {
        return this._collection.find();
    }

    // Inserts a product in the collection
    create(product: Product): void {
        this._collection.insert(product);
    }

}

module.exports = function (collection: Collection<Product>) {
    return new ProductRepository(collection);
}