﻿//initializing in-memory database and collections
import * as Loki from 'lokijs';
import * as Path from 'path';
import { Product } from "./BO/product";
import { Availability } from "./BO/availability";
import * as Debug from 'debug';
import * as Express from 'express';
import routes from './routes/index';

var inMemoryDb = new Loki('data.json');

var productsCol = inMemoryDb.addCollection('products');
var productRepository = require( './DAL/product.repository')(productsCol);
var productManager = require('./BLL/product.manager')(productRepository);
var productController = require('./Controller/product.controller')(productManager);

var availabilitiesCol = inMemoryDb.addCollection('availabilities');
var availabilityRepository = require('./DAL/availability.repository')(availabilitiesCol);
var availabilityManager = require('./BLL/availability.manager')(availabilityRepository);
var availabilityController = require('./Controller/availability.controller')(availabilityManager);

// filling collections with dummy data
for (let i = 1; i < 101; ++i) {
    productManager.create({
        id: i,
        name: `Product-${i}`
    } as Product)
}
const products: Product[] = productManager.findAll();
const now = new Date().getTime();
for (let d = 0; d < 90; ++d) { //For every day in the last 3 months, set each product availability

    for (let p of products) {
        availabilitiesCol.insert({
            productId: p.id,
            productName: p.name,
            date: new Date(new Date().setTime(now - d * 8.64e+7)),
            inventoryLevel: Math.floor(Math.random()*60)+20
        } as Availability)
    }
}

// initializing MVC app
var app = Express();

// view engine setup
app.set('views', Path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// define folder for static files
app.use(Express.static(Path.join(__dirname, '/../Flowlity.GUI/wwwroot')));

// allows use of application/json
app.use(Express.json());

// defining routes
app.use('/products', productController);
app.use('/availabilities', availabilityController);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err: any, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err: any, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    Debug('Express server listening on port ' + server.address().port);
});