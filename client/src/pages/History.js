import React,{useState,useEffect} from "react"
import axios from "axios"

function History(){
    const [transactions,setTransactions]=useState([])
  

    function hist(){
        axios.get("http://localhost:3002/transactions").then((response)=>{
            setTransactions(response.data)
            console.log(response.data)
        })
    }

    useEffect(()=>{
        hist()
    },[])
 
        

    return(<div className="customers">
    <img src="https://brickwhisper.com/images/white-brick-wall.jpg"  alt="sdc"/>
    <div className="cust-heading">
    <h1>TRANSACTION HISTORY</h1></div>
    <div className="hist-info">
    <div className="personh">
            <div className="perso">Transaction ID</div>
            <div className="perso">From</div>
            <div className="perso">To</div>
            <div className="perso">Amount transfered</div>
            <div className="perso">Date</div>
            <div className="perso">Time (GST)</div>
           

        </div>
   
    {transactions.slice(0).reverse().map((ledger)=>{return(
        <div className="person">
            <div className="perso">{ledger._id}</div>
            <div className="perso">{ledger.from}</div>
            <div className="perso">{ledger.to}</div>
            <div className="perso">{ledger.amount} INR</div>
            <div className="perso">{ledger.date}</div>
            <div className="perso">{ledger.time}</div>
           

        </div>
        )})}
    </div>

    </div>)
}


export default History