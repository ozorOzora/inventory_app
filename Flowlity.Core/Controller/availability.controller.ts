/*
 * GET products listing.
 */
import express = require('express');
import { AvailabilityManager } from '../BLL/availability.manager';
const router = express.Router();

module.exports = function (manager: AvailabilityManager) {

    router.get('/:productId', (req: express.Request, res: express.Response) => {
        res.send(manager.findAll(parseInt(req.params.productId)));
    });

    router.put('/', (req: express.Request, res: express.Response) => {
        var object = req.body;
        var availability = manager.find(object.$loki);
        availability.inventoryLevel = object.inventoryLevel;
        manager.update(availability);
        res.send();
    });

    return router;
}