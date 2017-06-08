/**
 * Created by royz on 08/06/2017.
 */

const express = require('express');
const bodyParser = require('body-parser');

const app= express();

// restService.use(bodyParser.urlencoded({
//     extended: true
// }));
//
// restService.use(bodyParser.json());

app.post('/repeat-after-me', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});

app.get('/', function (req, res) {
    res.send('Hello World')
})

// restService.listen((process.env.PORT || 8000), function() {
//     console.log("Server up and listening");
// });

app.listen((process.env.PORT || 3000), function () {
    console.log('Example app listening on port 3000!')
});
