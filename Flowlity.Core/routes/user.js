"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
const express = require("express");
const router = express.Router();
module.exports = function (collection) {
    router.get('/', (req, res) => {
        res.send(collection.where(() => true));
    });
    return router;
};
//# sourceMappingURL=user.js.map