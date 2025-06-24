let express = require('express');
require('dotenv').config()

let app = express();

app.use(function (req, res, next) {
    let _log = `${req.method} ${req.path} - ${req.ip}`
    console.log(_log);
    next();
})
// We have set '/public' as the static directory in the 'index.html'
app.use('/public', express.static(__dirname + '/public'));

const home_html = __dirname + '/views/index.html';

app.get('/', function (req, res) {
    res.sendFile(home_html);
})


app.get('/json', function (req, res) {
    const _case = process.env.MESSAGE_STYLE
    
    let message = 'Hello json';

    if (_case === 'uppercase') {
        message = message.toUpperCase();
    }

    res.json({
        message: message
    });
})































 module.exports = app;
