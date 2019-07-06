"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET products listing.
 */
var express = require("express");
var router = express.Router();
module.exports = function (manager) {
    router.get('/:id', function (req, res) {
        res.send(manager.findAll(parseInt(req.params.id)));
    });
    return router;
};
//# sourceMappingURL=availability.controller.js.map