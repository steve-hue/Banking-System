import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

function Transfer(){
    const [amount,setAmount]=useState(null)
    const [person,setPerson]=useState([])
    const [customers,setCustomers]=useState([])
    const [receipant,setReceipant]=useState([])
    const [rname,setRname]=useState("")
    const [success,setSuccess]=useState(true)
    const {id} =useParams()

   console.log(id)

    function getinfo(id){
        axios.get(`http://localhost:3002/customers/${id}`).then((response)=>{
            setPerson(response.data[0])
            console.log(response.data[0])
        })
        axios.get(`http://localhost:3002/`).then((response)=>{
            setCustomers(response.data)
           
          
           
        })
        
     

    }

    function payto(item,sender,receiver){
        console.log(`${sender.name} dhf ${receiver} `)
        
        axios.put(`http://localhost:3002/update`,{
            
            id1:sender._id,
            id2:receiver,
            amount:item

        })
      
        
        

        axios.post(`http://localhost:3002/history`,{
            id1:sender._id,
            id2:receiver,
            amount:item

        })

        setSuccess(false)
    }

    function done(){
        return ( <div className="transfer"><h1>Money Transfer</h1>
    
            <div className="pay">
          
            <div>
            <h3>Please select the receipant</h3>
                  
                <select  onChange={(e)=>setReceipant(e.target.value)}>
                <option disabled selected hidden>Pay to</option>
                {customers.map((item)=>{
                    return(
                        <option  value={item._id}>{item.name}</option>
                    )
                })}
        
                </select>
                </div>
             
                <div>
                <h4>Amount</h4>
                <input type="number" placeholder="INR" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
                </div>
              
             
                </div>
              <button onClick={()=>payto(amount,person,receipant)}>PAY</button></div>)

    }
    function fail(){
        return(<div className="transfer-click"><img src="https://cdn1.iconfinder.com/data/icons/web-interface-part-2/32/circle-checkmark-512.png" alt="Asc" />
    </div>)}

    useEffect(()=>{
        getinfo(id)
    },[])

   
   
    return(<div className="mistake">
    <div className="userdetails">
    <div className="userdetails-card">
      <div><h3>User Name:</h3></div>
        <div><h3>{person.name}</h3></div>
        </div>
       
    <div className="userdetails-card">
      <div> <h3>Email ID:</h3></div>
        <div><h3>{person.email}</h3></div>
        </div>
        
    <div className="userdetails-card">
      <div> <h3>Phone number:</h3></div>
        <div><h3 className="userdetails-info">+91-{person.mobile}</h3></div>
        </div>

    <div className="userdetails-card">
      <div> <h3>Current Balance:</h3></div>
        <div><h3>{person.balance} INR</h3></div>
        </div>
       
       
       
    </div>
   
   {success ? done() : fail()}
   
    </div>)
}


export default Transfer