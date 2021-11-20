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
    <p>Follow Us :</p>
    <div className="social-media"><GrInstagram size={20}/></div>
    <div className="social-media"><ImWhatsapp size={20}/></div>
    <div className="social-media"><FaFacebookSquare size={20} /></div>
    <div className="social-media"><GrLinkedin size={20}/></div>
   <div className="social-media"> <GrTwitter size={20}/></div>


    </div>
        <p>copy rights reserved</p>
    </div>)
}


export default Footer