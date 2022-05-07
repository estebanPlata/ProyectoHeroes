const express = require("express");
const api = express.Router();/* creamos router */
const productCtrl = require("../controllers/product")

api.get('/',productCtrl.getConexion);
api.get('/superheroes',productCtrl.getProducts);/* accedemos a los heroes*/
api.get('/superheroes/:id',productCtrl.getProduct);
api.post('/superheroes',productCtrl.postProduct);
api.put('/superheroes/:id',productCtrl.putProduct);
api.delete('/superheroes/:id',productCtrl.deleteProduct);

module.exports = api;