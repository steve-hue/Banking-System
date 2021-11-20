import React,{useState,useEffect} from "react"
import "./App.css"
import {Link} from "react-router-dom";
import {GrView} from "react-icons/gr"
import axios from "axios"


function Details(){
    const [people,setPeople]=useState([])
    const [check,setCheck]=useState(null)

    function info(){
        axios.get("http://localhost:3002/").then((response)=>{
            setPeople(response.data)
            console.log(response.data)
        })
    }

   function view(id){
       if(check){
        axios.put("http://localhost:3002/update",{
            id:check,
            view:false
        }).then((response)=>{
            console.log(check)
            console.log("SDC")
        })
       }
       
       axios.put("http://localhost:3002/update",{
           id:id,
           view:true
       }).then((response)=>{
           console.log(id)
           console.log("SDC")
       })
       setCheck(id)
        
   }
    useEffect(()=>{
        info()
    },[])
    return(
        <div>
        <div className="personc">
        <div className="perso">Serial Number</div>
        <div className="perso">Name</div>
        <div className="perso">Email ID</div>
        <div className="perso">Mobile Number</div>
        <div className="perso">Account Balance</div>
        <div className="perso">View </div> 

    </div>
        {
        people.map((people)=>{return(
        <div className="person">
            <div className="perso">{people.id}</div>
            <div className="perso">{people.name}</div>
            <div className="perso">{people.email}</div>
            <div className="perso">{people.mobile}</div>
            <div className="perso">{people.balance} INR</div>
            <div className="perso"><Link className="nav-links" to={`/customers/${people._id}`} > 
                <button ><GrView /></button>
                 </Link>
                </div> 

        </div>
       
        )})
        }
        </div>)
}



export default Details