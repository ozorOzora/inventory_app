"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET products listing.
 */
var express = require("express");
var express_validator_1 = require("express-validator");
var router = express.Router();
module.exports = function (manager) {
    router.get('/:productId', function (req, res) {
        res.send(manager.findAll(parseInt(req.params.productId)));
    });
    router.put('/', [
        express_validator_1.check('inventoryLevel').isInt().withMessage('must be an int')
    ], function (req, res) {
        var errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });
        manager.updateInventory(req.body.$loki, req.body.inventoryLevel);
        res.status(200).send();
    });
    return router;
};
//# sourceMappingURL=availability.controller.js.map