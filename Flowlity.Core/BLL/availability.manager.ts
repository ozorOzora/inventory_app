import { AvailabilityRepository } from "../DAL/availability.repository";
import { Availability } from "../BO/availability";

export class AvailabilityManager {

    private _repository: AvailabilityRepository;
    constructor(repository) {
        this._repository = repository;
    }

    // Returns the filetred collection
    findAll(productId: number): Availability[] {
        return this._repository.findAll(productId);
    }

    // Returns a single availlability
    find(id: number): Availability {
        return this._repository.find(id);
    }

    update(availability: Availability): void {
        this._repository.update(availability);
    }

}

module.exports = function (repository: AvailabilityRepository) {
    return new AvailabilityManager(repository);
}