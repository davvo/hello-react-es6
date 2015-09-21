'use strict';

var express = require("express"),
	compression = require('compression'),
	bodyParser = require('body-parser');

var comments = [];

var app = express();

app.use(compression());
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/comments.json', function (req, res) {
	res.send(comments);
});

app.post('/comments.json', function (req, res) {
	comments.push(req.body);
	res.send(comments);
});

var port = process.argv[2] || 8080;
app.listen(port);
console.log("Listening on port", port);