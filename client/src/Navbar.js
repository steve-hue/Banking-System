import "./App.css"
import React from "react";
import {GiBank} from "react-icons/gi";
import {Link} from "react-router-dom";


function Navbar(){
    return(
    <nav className="navbar">
        <div className="navbar-container">
        <div className="nav-left">
            <div className="page"><Link  to="/"><GiBank size={50}  color="white"/> </Link></div>
            <div className="page"><h1>BELFAST INTERNATIONAL BANK</h1></div>
           
        </div>
        <div className="nav-right">
        <div className="pages"><Link className="nav-links" to="/">Home</Link></div>
        <div className="pages"><Link  className="nav-links" to="/customers">Customers</Link></div>
        <div className="pages"><Link  className="nav-links" to="/history">Transaction History</Link></div>

        </div>
        </div>
    </nav>)
}



export default Navbar