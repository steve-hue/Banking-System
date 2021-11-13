import React from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"
import {GiPiggyBank} from "react-icons/gi";
import {FaThumbsUp} from "react-icons/fa"
import { FaHandshake } from "react-icons/fa";
import {FiCheckSquare} from "react-icons/fi"
import "../App.css"

function Home(){
    return(
   <div className="home">
   <div className="start">
   <img src="https://wallpapercave.com/wp/wp1956688.jpg"/>
   <div className="heading">
      <h1 >Discover a World Beyond Banking</h1>
      </div>
      <div className="head"><p>Experience it Now</p></div>
    <div><button>Transfer</button></div>
   </div>
   <div className="describe">
       <div className="blocks">
       <div >
        <FiCheckSquare  size={200} />
        </div>
        <div>
               <h2>Online Banking</h2>
       </div>
     </div>
       <div className="blocks">
       <FiCheckSquare size={200}/>

       <h2>Hassle free</h2></div>
       <div className="blocks">
       <FiCheckSquare size={200} />
       <h2>User Friendly</h2></div>

   </div>
   <Footer />
    </div>
    )
}


export default Home