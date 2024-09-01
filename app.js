var express=require('express');
var bodyParser = require('body-parser');
var app = express();
const SupermarketRouter = require("./routers/supermarketRouter")

app.use(bodyParser.json());

app.use('/supermarket', SupermarketRouter);

module.exports = app;