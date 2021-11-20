const mongoose=require("mongoose")

const PersonSchema= new mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    mobile:Number,
    balance:Number,
    view:Boolean
})


const Person=mongoose.model("Person",PersonSchema)
module.exports=Person