/*
 * GET products listing.
 */
import express = require('express');
import { ProductManager } from '../BLL/product.manager';
const router = express.Router();

module.exports = function (manager: ProductManager) {

    router.get('/', (req: express.Request, res: express.Response) => {
        res.send(manager.findAll());
    });

    //router.post('/', (req: express.Request, res: express.Response) => {
    //    res.send();
    //});

    return router;
}