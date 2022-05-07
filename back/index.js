const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.port || 4000

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



