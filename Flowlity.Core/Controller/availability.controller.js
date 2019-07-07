"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET products listing.
 */
var express = require("express");
var router = express.Router();
module.exports = function (manager) {
    router.get('/:productId', function (req, res) {
        res.send(manager.findAll(parseInt(req.params.productId)));
    });
    router.put('/', function (req, res) {
        var object = req.body;
        var availability = manager.find(object.$loki);
        availability.inventoryLevel = object.inventoryLevel;
        manager.update(availability);
        res.send();
    });
    return router;
};
//# sourceMappingURL=availability.controller.js.map