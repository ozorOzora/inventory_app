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
    return AvailabilityRepository;
}());
exports.AvailabilityRepository = AvailabilityRepository;
module.exports = function (collection) {
    return new AvailabilityRepository(collection);
};
//# sourceMappingURL=availability.repository.js.map