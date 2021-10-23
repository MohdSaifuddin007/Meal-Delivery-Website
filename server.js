const http = require('http');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static("express"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/express/index.html');
})

app.get('/packages', (req, res) => {
    res.sendFile(__dirname + '/express/packages.html');
})

app.get('/account', (req, res) => {
    res.sendFile(__dirname + '/express/account.html');
})

const port = process.env.PORT || 3000;

var listener = app.listen(port, function() {
    console.log('Server listening on port ' + port);
});
