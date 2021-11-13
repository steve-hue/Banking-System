import Reac from "react"
import Navbar from "../Navbar"
import Details from "../Details"
import cust from "../customer"


function Customers(){
    

       
    return(
    <div className="customers">
    <img src="https://brickwhisper.com/images/white-brick-wall.jpg"  alt="sdc"/>
    <div className="cust-heading">
    <h1>CUSTOMER INFORMATION</h1></div>
    <div className="cust-info">
   
        <Details people={cust} />
    </div>

    </div>)
}


export default Customers