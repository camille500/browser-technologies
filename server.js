/* LOAD ALL DEPENDENCIES
--------------------------------------------------------- */
const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');

const app = express();

/* USE GZIP COMPRESSION FOR BETTER PERFORMANCE
--------------------------------------------------------- */
app.use(compression());

/* LOAD ALL ROUTES
--------------------------------------------------------- */
const indexRouter = require('./routes/index');

require('dotenv').config()
const port = process.env.PORT || 3000;

/* MIDDLEWARE FOR THE VIEW ENGINE
--------------------------------------------------------- */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* BODY-PARSER FOR READING POST REQUESTS
--------------------------------------------------------- */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* INITIALIZE ROUTES
--------------------------------------------------------- */
app.use(express.static('public'));
app.use('/', indexRouter);

/* START THE SERVER
--------------------------------------------------------- */
app.listen(port, function() {
    console.log('Server started on port 3000');
});
