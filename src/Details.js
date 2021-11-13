import react from "react"
import "./App.css"
import {Link} from "react-router-dom";
import {GrView} from "react-icons/gr"


function Details({people}){
    return(
        people.map((people)=>{return(
        <div className="person">
            <div className="perso">{people.id}</div>
            <div className="perso">{people.name}</div>
            <div className="perso">{people.emailId}</div>
            <div className="perso">{people.mobile}</div>
            <div className="perso">{people.amount}</div>
            <div className="perso"><Link className="nav-links" to="/transfer" >
                <button><GrView /></button>
            </Link></div>

        </div>
        )})
    )
}


export default Details