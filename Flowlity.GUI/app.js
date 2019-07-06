"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var e_1, _a;
//initializing in-memory database and collections
var Loki = require("lokijs");
var Path = require("path");
var Debug = require("debug");
var Express = require("express");
var index_1 = require("../Flowlity.Core/routes/index");
var inMemoryDb = new Loki('data.json');
var productsCol = inMemoryDb.addCollection('products');
var productRepository = require('../Flowlity.Core/DAL/product.repository')(productsCol);
var productManager = require('../Flowlity.Core/BLL/product.manager')(productRepository);
var productController = require('../Flowlity.Core/Controller/product.controller')(productManager);
var availabilitiesCol = inMemoryDb.addCollection('availabilities');
var availabilityRepository = require('../Flowlity.Core/DAL/availability.repository')(availabilitiesCol);
var availabilityManager = require('../Flowlity.Core/BLL/availability.manager')(availabilityRepository);
var availabilityController = require('../Flowlity.Core/Controller/availability.controller')(availabilityManager);
// filling collections with dummy data
for (var i = 1; i < 101; ++i) {
    productManager.create({
        id: i,
        name: "Product-" + i
    });
}
var products = productManager.findAll();
var now = new Date().getTime();
for (var d = 0; d < 90; ++d) { //For every day in the last 3 months, set each product availability
    try {
        for (var products_1 = tslib_1.__values(products), products_1_1 = products_1.next(); !products_1_1.done; products_1_1 = products_1.next()) {
            var p = products_1_1.value;
            availabilitiesCol.insert({
                productId: p.id,
                productName: p.name,
                date: new Date(new Date().setTime(now - d * 8.64e+7)),
                inventoryLevel: Math.floor(Math.random() * 60) + 20
            });
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (products_1_1 && !products_1_1.done && (_a = products_1.return)) _a.call(products_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
var test = availabilitiesCol.find({ productId: 2 });
// initializing MVC app
var app = Express();
// view engine setup
app.set('views', Path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// define folder for static files
app.use(Express.static(Path.join(__dirname, 'wwwroot')));
app.use('/products', productController);
app.use('/availabilities', availabilityController);
app.use('/', index_1.default);
//app.use('/users', users);
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
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
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
//# sourceMappingURL=app.js.map