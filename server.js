var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser')
var httpsRedirect = require("express-https-redirect");

app.use("/", httpsRedirect());
app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


/// app runs in port
app.listen(process.env.PORT || 3000, function () {
    console.log('listening at 3000');
})
