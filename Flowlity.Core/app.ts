import * as Debug from 'debug';
import * as Express from 'express';
import * as Path from 'path';
import * as Loki from 'lokijs';

import routes from './routes/index';
import users from './routes/user';

//initializing in-memory database
var inMemoryDb = new Loki('data.json');

//initializing MVC app
var app = Express();

//// view engine setup
//app.set('views', Path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

app.use(Express.static(Path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

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
