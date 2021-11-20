const mongoose=require("mongoose")

const   HistorySchema= new mongoose.Schema({

    from:String,
    to:String,
    amount:Number,
    date:   String,
    time:String
   
})


const History=mongoose.model("History",HistorySchema)
module.exports=History