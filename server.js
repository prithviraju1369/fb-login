var express = require('express');
var session = require('express-session');
var path = require('path');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser')
var httpsRedirect = require("express-https-redirect");

app.use(session({ secret: 'testsecret', cookie: { secure: true } }));

app.use("/", httpsRedirect());
// app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    if (!req.session.login) {
        res.sendFile(path.join(__dirname, './public/index.html'));
    } else {
        res.send('logged in!');
    }
});

app.post('/login', (req, res) => {
    req.session.login = true;
    res.send('OK');
})


/// app runs in port
app.listen(process.env.PORT || 3000, function () {
    console.log('listening at 3000');
})
