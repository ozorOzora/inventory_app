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

    // Returns a single availlability
    find(id: number): Availability {
        return this._collection.findOne({ $loki: id });
    }

    update(availability: Availability): void {
        this._collection.update(availability);
    }

}

module.exports = function (collection: Collection<Availability>) {
    return new AvailabilityRepository(collection);
}