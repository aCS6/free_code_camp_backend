let express = require('express');
let app = express();


const home_html = __dirname + '/views/index.html';

app.get('/', function (req, res) {
    res.sendFile(home_html);
})




































 module.exports = app;
