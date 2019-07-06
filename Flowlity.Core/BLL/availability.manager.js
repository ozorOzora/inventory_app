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
    return AvailabilityManager;
}());
exports.AvailabilityManager = AvailabilityManager;
module.exports = function (repository) {
    return new AvailabilityManager(repository);
};
//# sourceMappingURL=availability.manager.js.map