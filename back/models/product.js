const mongoose = require("mongoose");
const Schema = mongoose.Schema/* esquema */

const ProductSchema = Schema({
    name:String,
    category:String,
    city:String,
    status:String,
    typesOfPower:Array,
    car:Boolean,
    kindOfCar:String
})

module.exports =  mongoose.model("Product", ProductSchema)