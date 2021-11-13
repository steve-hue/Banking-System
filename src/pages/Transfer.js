import React,{useState} from "react"
import cust from "../customer"

function Transfer({person}){
    const [amount,setAmount]=useState(null)
    return(<div className="mistake">
    <div className="userdetails">
        <h3>User Name:</h3>
        <h3>Email ID</h3>
        <h3>Phone number</h3>
        <h3>Current Balance(INR)</h3>
    </div>
    <div className="transfer">
    <h1>Money Transfer</h1>
    
    <div className="pay">
    <div>
    <h3>{person}</h3>
    {/* <select >
    <option disabled selected hidden>User name</option>
        {cust.map((item)=>{
            return(
                <option value={item.name}>{item.name}</option>
            )
        })}
    </select> */}
    </div>
    <div>
    <h3>Please select the receipant</h3>
          
        <select>
        <option disabled selected hidden>Pay to</option>
        {cust.map((item)=>{
            return(
                <option value={item.name}>{item.name}</option>
            )
        })}

        </select>
        </div>
        <div>
        <h4>Amount</h4>
        <input type="number" placeholder="INR" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
        </div>
        </div>
    
    </div>
    </div>)
}


export default Transfer