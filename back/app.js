const express = require("express");/* creamos variable que contenga express */
const bodyParser = require('body-parser');/* middleware */
const productCtrl = require("./controllers/product")

const app= express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.get('/',productCtrl.getConexion);
app.get('/superheroes',productCtrl.getProducts);/* accedemos a los heroes*/
app.get('/superheroes/:id',productCtrl.getProduct);
app.post('/superheroes',productCtrl.postProduct);
app.put('/superheroes/:id',productCtrl.putProduct);
app.delete('/superheroes/:id',productCtrl.deleteProduct);

module.exports = app;