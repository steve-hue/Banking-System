const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()


const PersonModel=require("./models/Person")
const HistoryModel=require("./models/History")
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://password1234:password1234@information.e432b.mongodb.net/bank?retryWrites=true&w=majority",{
    useNewUrlParser:true,useUnifiedTopology:true
})

const steve=new PersonModel({id:1,name:"Steve Stagy",email:"stevestagy@gmail.com",mobile:7709341170,balance:10000,view:false})
const kenneth=new PersonModel({id:2,name:"Kenneth Branagh",email:"kenny1102@gmail.com",mobile:1294561091,balance:5600,view:false})
const sharlene=new PersonModel({id:3,name:"Sharlene Dalgato",email:"sharlenemyg@gmail.com",mobile:5934568243,balance:6900,view:false})
const dwayne=new PersonModel({id:4,name:"Dwayne Larson",email:"dwayneme@gmail.com",mobile:1234479812,balance:1000,view:false})
const christan=new PersonModel({id:5,name:"Christan Dono",email:"chrishello@gmail.com",mobile:4834565829,balance:7000,view:false})
const sean=new PersonModel({id:6,name:"Sean Elvis",email:"itsmesean@gmail.com",mobile:1283939591,balance:10230,view:false})
const claire=new PersonModel({id:7,name:"Claire Judge",email:"clairejudge@gmail.com",mobile:1234710391,balance:900,view:false})
const steven=new PersonModel({id:8,name:"Steven Mckenzie",email:"steven0101@gmail.com",mobile:49202367891,balance:55000,view:false})
const dwight=new PersonModel({id:9,name:"Dwight Joshua",email:"scranton@gmail.com",mobile:9044327891,balance:17000,view:false})
const pastor=new PersonModel({id:10,name:"Pastor Nick",email:"pastoronmyknees@gmail.com",mobile:1299920181,balance:10800,view:false})

const first=new HistoryModel({from:"Steve Stagy",to:"stevestagy@gmail.com",amount:10000,date:12})

// PersonModel.insertMany([steve,kenneth,sharlene,dwayne,christan,sean,claire,steven,dwight,pastor],function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Succesfully saved")
//     }
// })
// app.get("/",async (req,res)=>{
//     const person=new PersonModel({id:1,name:"Steve Stagy",email:"stevestagy@gmail.com",mobile:1234567891,balance:10000});

//     try{
//         await person.save();
//         res.send("insergvhgc")
//     }catch(err){
//         console.log(err)
//     }

// })

// HistoryModel.insertMany([first],function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Succesfully saved")
//     }
// })

app.get("/",async(req,res)=>{
    PersonModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })
})
app.get("/transactions",async(req,res)=>{
    HistoryModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })
})
app.get(`/customers/:_id`,async(req,res)=>{
   
    PersonModel.find({_id:req.params._id},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })
    
})

let name1=""
let name2=""

app.put("/update",async(req,res)=>{
    const id1=req.body.id1;
    const id2=req.body.id2;
    const amount=req.body.amount;
   console.log(id1)
   console.log(id2)

    try{
     
        await PersonModel.findById(id1,(err,updatedPerson)=>{
            updatedPerson.balance=updatedPerson.balance-amount
            // name1=updatedPerson.name
            // console.log(name1)
            console.log(updatedPerson.balance)
            updatedPerson.save()
          
            
            // res.send("update")
        })
    }catch(err){
        console.log(err)
    }
    

    try{
     
        await PersonModel.findById(id2,(err,updatedPers)=>{
            updatedPers.balance=parseInt(updatedPers.balance)+parseInt(amount)
            console.log(updatedPers.balance)
        //    name2=updatedPers.name
        //    console.log(name2)
            updatedPers.save()
          

            res.send("update")
        })
    }catch(err){
        console.log(err)
    }
})


app.post("/history",async(req,res)=>{
    const id1=req.body.id1;
    const id2=req.body.id2;
    const amount=req.body.amount;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    try{
     
        await PersonModel.findById(id1,(err,updatedPerson)=>{
           
            name1=updatedPerson.name
         
          
          
            
            // res.send("update")
        })
    }catch(err){
        console.log(err)
    }
    try{
     
        await PersonModel.findById(id2,(err,updatedPerson)=>{
            
            name2=updatedPerson.name
            
          
            const first=new HistoryModel({from:name1,to:name2,amount:amount,date:date,time:time})
        
        
            try{
             
                first.save()
                res.send("inserted")
            }catch(err){
                console.log(err)
            }
            
            // res.send("update")
        })
    }catch(err){
        console.log(err)
    }


})

app.listen(3002,()=>{
    console.log("Server running on port 3002")
})