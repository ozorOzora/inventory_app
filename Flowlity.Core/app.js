"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Debug = require("debug");
const Express = require("express");
const Path = require("path");
const Loki = require("lokijs");
const index_1 = require("./routes/index");
const user_1 = require("./routes/user");
//initializing in-memory database and collections
var inMemoryDb = new Loki('data.json');
var products = inMemoryDb.addCollection('products');
var availabilities = inMemoryDb.addCollection('availabilities');
//filling collections with dummy data
for (let i = 0; i < 100; ++i) {
    products.insert({
        id: i,
        name: `Product-${i}`
    });
}
var test = products.get(1);
console.log(test);
//const now = new Date().getTime();
//for (let day = 0; day > 180; ++day) { //For every day in the last 6 months, set each product availability
//    const randomProduct = products.get(Math.random() * 100)
//    for (let product in products.where(() => true) as Product[]) {
//        availabilities.insert({
//            id: 8.64e+7,
//            productId: product.name,
//            productName: products.get(0).name,
//            date: new Date(new Date().setTime(now - day * 8.64e+7)),
//            inventoryLevel: 0
//        } as Availability)
//    }
//}
//initializing MVC app
var app = Express();
//// view engine setup
//app.set('views', Path.join(__dirname, 'views'));
//app.set('view engine', 'pug');
app.use(Express.static(Path.join(__dirname, 'public')));
app.use('/', index_1.default);
app.use('/users', user_1.default);
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