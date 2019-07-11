/*
 * GET products listing.
 */
import express = require('express');
import { check, validationResult } from 'express-validator';
import { AvailabilityManager } from '../BLL/availability.manager';
const router = express.Router();

module.exports = function (manager: AvailabilityManager) {

    router.get('/:productId', (req: express.Request, res: express.Response) => {
        try {
            const availibilities = manager.findAll(parseInt(req.params.productId));
            res.status(200).send(availibilities);
        }
        catch(err){
            res.status(err.statusCode).json(err);
        }
    });

    router.put('/', [
        check('inventoryLevel').isInt().withMessage('must be an int')
    ],
        (req: express.Request, res: express.Response) => {
            const errors = validationResult(req);
            if (!errors.isEmpty())
                return res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });

            manager.updateInventory(req.body.$loki, req.body.inventoryLevel);
            res.status(200).send();
        });

    return router;
}