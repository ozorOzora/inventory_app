"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET products listing.
 */
var express = require("express");
var router = express.Router();
module.exports = function (manager) {
    router.get('/', function (req, res) {
        res.send(manager.findAll());
    });
    return router;
};
//# sourceMappingURL=product.controller.js.map