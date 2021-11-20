import React from "react"

import {FiCheckSquare} from "react-icons/fi"
import "../App.css"

function Home(){
    return(
   <div className="home">
   <div className="start">
   <img src="https://wallpapercave.com/wp/wp1956688.jpg" alt="img"/>
   <div className="heading">
      <h1 >Discover a World Beyond Banking</h1>
      </div>
      <div className="head"><p>Experience it Now</p></div>
  
   </div>
   <div className="describe">
       <div className="blocks">
       <div className="check">
        <FiCheckSquare size={100} />
        </div>
        <div>
               <h2>Online Banking</h2>
       </div>
     </div>
       <div className="blocks">
       <div className="check">
       <FiCheckSquare size={100}/>
</div><div>
       <h2>Hassle Free</h2>
       </div></div>
       <div className="blocks">
       <div className="check">
       <FiCheckSquare size={100} />
       </div><div>
       <h2>User Friendly</h2></div>
       </div>

   </div>

    </div>
    )
}


export default Home