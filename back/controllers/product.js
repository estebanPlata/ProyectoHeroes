const Product = require("../models/product");

function getConexion(req,res){
    res.send('Node JS registro de superHeroes con mongoDB, creada por: Esteban Plata')
}

function getProducts(req,res){
    Product.find({},(err,heroes)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petición en la base de datos: ${err}`});
        if(!heroes) return res.status(404).send({message: `Super heroe no encontrado`});
        res.status(200).send(heroes);
    })
}
function getProduct(req,res){/* obtener heroe por id */
    let id = req.params.id
    Product.findById(id,(err,pro)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición en la base de datos: ${err}`});
        if(!pro) return res.status(404).send({message:`Super heroe no encontrado`});
        res.status(200).send({id:pro});
    });
}
function deleteProduct(req,res){
    let id = req.params.id;/* id contiene el parametro de id  */
    Product.findById(id,(err,pro)=>{/* funcion para biscar id */
    if(err) return res.status(500).send({message:`Error al realizar la petición en la base de datos: ${err}`});
    pro.remove(err=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición en la base de datos: ${err}`});
        res.status(200).send({message: 'Super Heroe eliminado'});
        })
    })
}
function postProduct(req,res){
    let product = new Product();
    product.name = req.body.name;
    product.category = req.body.category;
    product.city = req.body.city;
    product.status = req.body.status;
    product.typesOfPower = req.body.typesOfPower;
    product.car = req.body.car;
    product.kindOfCar = req.body.kindOfCar;

    product.save((err,pro)=>{
        if(err) return res.status(500).send({message:`Error al salvar en base de datos: ${err}`})
        res.status(200).send({product:pro})
    })
}
function putProduct(req,res){
    let id = req.params.id;
    let upDate = req.body;
    Product.findByIdAndUpdate(id,upDate,(err,pro)=>{
        if(err) return res.status(500).send({message:`Error al actualizar el heroe: ${err}`});
        res.status(200).send({id:pro});
    })
}
module.exports={
    getConexion,
    getProduct,
    getProducts,
    putProduct,
    postProduct,
    deleteProduct
}