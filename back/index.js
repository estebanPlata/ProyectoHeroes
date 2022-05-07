const express = require("express");/* creamos variable que contenga express */
const bodyParser = require('body-parser');/* middleware */
const mongoose = require("mongoose");

const Product = require("./models/product.js");

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

app.get('/',(req,res)=>{/* se da un mensaje para saber si se conecto bien a la api */
    res.send('Node JS registro de superHeroes con mongoDB, creada por: Esteban Plata')
});

app.get('/superheroes',(req,res)=>{/* accedemos a los heroes*/
    Product.find({},(err,heroes)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petición en la base de datos: ${err}`});
        if(!heroes) return res.status(404).send({message: `Super heroe no encontrado`});
        res.status(200).send({heroes});
    })
});

app.get('/superheroes/:id',(req,res)=>{/* accedemos al id del heroe*/
    let id = req.params.id
    Product.findById(id,(err,pro)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición en la base de datos: ${err}`});
        if(!pro) return res.status(404).send({message:`Super heroe no encontrado`});
        res.status(200).send({id:pro});
    });
});

