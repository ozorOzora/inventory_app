"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AvailabilityRepository = /** @class */ (function () {
    function AvailabilityRepository(collection) {
        this._collection = collection;
    }
    /// Returns the filtered collection
    AvailabilityRepository.prototype.findAll = function (productId) {
        return this._collection.find({ 'productId': productId });
    };
    // Returns a single availlability
    AvailabilityRepository.prototype.find = function (id) {
        return this._collection.findOne({ $loki: id });
    };
    AvailabilityRepository.prototype.update = function (availability) {
        this._collection.update(availability);
    };
    return AvailabilityRepository;
}());
exports.AvailabilityRepository = AvailabilityRepository;
module.exports = function (collection) {
    return new AvailabilityRepository(collection);
};
//# sourceMappingURL=availability.repository.js.map