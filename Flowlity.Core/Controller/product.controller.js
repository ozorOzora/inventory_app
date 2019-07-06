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
    //router.post('/', (req: express.Request, res: express.Response) => {
    //    res.send();
    //});
    return router;
};
//# sourceMappingURL=product.controller.js.map