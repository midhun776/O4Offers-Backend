var express=require('express');
var bodyParser = require('body-parser');
var app = express();
const SupermarketRouter = require("./routers/supermarketRouter")

app.use(bodyParser.json());

app.use('/supermarket', SupermarketRouter);
app.use('/offer', SupermarketRouter);

module.exports = app;