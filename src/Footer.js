import React from "react"
import "./App.css"
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare} from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";



function Footer(){
    return(<div className="footer">
    <div className="media">
    <h4>Follow Us :</h4>
    <GrInstagram />
    <ImWhatsapp />
    <FaFacebookSquare />
    <GrLinkedin />
    <GrTwitter />


    </div>
        <h3>copy rights reserved</h3>
    </div>)
}


export default Footer