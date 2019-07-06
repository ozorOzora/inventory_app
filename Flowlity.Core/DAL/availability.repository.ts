import { Availability } from "../BO/availability";

export class AvailabilityRepository {

    private _collection: Collection<Availability>;
    constructor(collection) {
        this._collection = collection;
    }

    /// Returns the filtered collection
    findAll(productId: number): Availability[] {
        return this._collection.find({ 'productId': productId });
    }

}

module.exports = function (collection: Collection<Availability>) {
    return new AvailabilityRepository(collection);
}