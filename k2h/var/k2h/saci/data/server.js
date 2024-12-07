const logger = require("morgan");
const cors = require("cors");
const http = require("http");
const express = require("express");
const errorHandler = require("errorhandler");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const { log } = require('./utils/logger');

var app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use(function (err, req, res, next) {
    if (err.name === 'StatusError') {
        res.send(err.status, err.message);
    } else {
        next(err);
    }
});

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
    app.use(errorHandler())
}

app.use('/public/status', require('./controllers/public/statusRoutes'));
//app.use('/admins', require('./routes/adminRoutes'));
//app.use('/clients', require('./routes/clientRoutes'));
//app.use('/public', require('./routes/publicRoutes'))

var port = process.env.PORT || 80;

http.createServer(app).listen(port, function (err) {
    log('API listening on port ' + port + '.');
});
