/* LOAD ALL DEPENDENCIES
--------------------------------------------------------- */
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

/* USE GZIP COMPRESSION FOR BETTER PERFORMANCE
--------------------------------------------------------- */
app.use(compression());

/* LOAD ALL ROUTES
--------------------------------------------------------- */
const indexRouter = require('./routes/index');

/* MIDDLEWARE FOR THE VIEW ENGINE
--------------------------------------------------------- */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* INITIALIZE ROUTES
--------------------------------------------------------- */
app.use('/', indexRouter);

/* START THE SERVER
--------------------------------------------------------- */
app.listen(3000, function() {
    console.log('Server started on port 3000');
});
