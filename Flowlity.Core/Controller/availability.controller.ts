/*
 * GET products listing.
 */
import express = require('express');
import { AvailabilityManager } from '../BLL/availability.manager';
const router = express.Router();

module.exports = function (manager: AvailabilityManager) {

    router.get('/:id', (req: express.Request, res: express.Response) => {
        res.send(manager.findAll(parseInt(req.params.id)));
    });


    return router;
}