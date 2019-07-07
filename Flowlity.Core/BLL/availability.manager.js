"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AvailabilityManager = /** @class */ (function () {
    function AvailabilityManager(repository) {
        this._repository = repository;
    }
    // Returns the filetred collection
    AvailabilityManager.prototype.findAll = function (productId) {
        return this._repository.findAll(productId);
    };
    // Returns a single availlability
    AvailabilityManager.prototype.find = function (id) {
        return this._repository.find(id);
    };
    AvailabilityManager.prototype.update = function (availability) {
        this._repository.update(availability);
    };
    return AvailabilityManager;
}());
exports.AvailabilityManager = AvailabilityManager;
module.exports = function (repository) {
    return new AvailabilityManager(repository);
};
//# sourceMappingURL=availability.manager.js.map