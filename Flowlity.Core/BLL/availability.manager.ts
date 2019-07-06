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

}

module.exports = function (repository: AvailabilityRepository) {
    return new AvailabilityManager(repository);
}