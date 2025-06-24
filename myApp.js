let express = require('express');
let app = express();

// We have set '/public' as the static directory in the 'index.html'
app.use('/public', express.static(__dirname + '/public'));

const home_html = __dirname + '/views/index.html';

app.get('/', function (req, res) {
    res.sendFile(home_html);
})


app.get('/json', function (req, res) {
    res.json({
        message: 'Hello json'
    });
})































 module.exports = app;
