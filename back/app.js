const express = require("express");/* creamos variable que contenga express */
const bodyParser = require('body-parser');/* middleware */
const api = require("./routes/index");
const cors = require("cors");

const app= express();
app.use(cors())/* todo el mundo puedo utilizar esta api */
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(api);

module.exports = app;