"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//initializing in-memory database and collections
const Loki = require("lokijs");
var inMemoryDb = new Loki('data.json');
var productsCol = inMemoryDb.addCollection('products');
var productRepository = require('./DAL/product.repository')(productsCol);
var productManager = require('./BLL/product.manager')(productRepository);
var productController = require('./Controller/product.controller')(productManager);
var availabilitiesCol = inMemoryDb.addCollection('availabilities');
// filling collections with dummy data
for (let i = 1; i < 101; ++i) {
    productManager.create({
        id: i,
        name: `Product-${i}`
    });
}
const products = productManager.findAll();
const now = new Date().getTime();
for (let d = 0; d > 180; ++d) { //For every day in the last 6 months, set each product availability
    for (let p of products) {
        availabilitiesCol.insert({
            productId: p.id,
            productName: p.name,
            date: new Date(new Date().setTime(now - d * 8.64e+7)),
            inventoryLevel: 0
        });
    }
}
const Debug = require("debug");
const Express = require("express");
const Path = require("path");
const index_1 = require("./routes/index");
//initializing MVC app
var app = Express();
//// view engine setup
app.set('views', Path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(Express.static(Path.join(__dirname, 'public')));
app.use('/products', productController);
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
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
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