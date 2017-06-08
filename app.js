/**
 * Created by royz on 08/06/2017.
 */

const express = require('express');
const bodyParser = require('body-parser');

const app= express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/repeat-after-me', function(req, res) {
    var speech = req.body.result && req.body.result.parameters &&
                req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Master... I couldn't understand... please speak to me."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'repeat-after-me'
    });
});

app.get('/', function (req, res) {
    res.send('This is my test repeat after me app.')
})

module.exports = app;
