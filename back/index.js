const express = require("express");/* creamos variable que contenga express */
const bodyParser = require('body-parser');/* middleware */
const mongoose = require("mongoose");

const productCtrl = require("./controllers/product")

const app= express();
const port = process.env.port || 4000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/* variables de entorno */
const password = "MA4c7njJqZZQRwGd";
const dbName = "superheroes";
const uri =`mongodb+srv://estebanPlata:${password}@cluster0.cs82u.mongodb.net/${dbName}?retryWrites=true&w=majority`;


mongoose.connect(uri,/* metodo de coneccion */
    {useNewUrlParser:true, useUnifiedTopology:true},
    app.listen(port,()=>{/* configuramos el puerto  */
    console.log(`escuchando en el puerto ${port}`);
})
)
/* promesa */
.then(()=>console.log('Base de datos conectada'))
.catch(e=>console.log(e));

app.get('/',productCtrl.getConexion);
app.get('/superheroes',productCtrl.getProducts);/* accedemos a los heroes*/
app.get('/superheroes/:id',productCtrl.getProduct);
app.post('/superheroes',productCtrl.postProduct);
app.put('/superheroes/:id',productCtrl.putProduct);
app.delete('/superheroes/:id',productCtrl.deleteProduct);

