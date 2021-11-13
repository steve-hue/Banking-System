import React from "react"
import './App.css';
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./pages/Home"
import  Customers from "./pages/Customers"
import Transfer from "./pages/Transfer"
import History from "./pages/History"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers"  element={<Customers />} />
        <Route path="/transfer"  element={<Transfer  />} />
        <Route path="/history"  element={<History />} />
      </Routes>
    
    </Router>
    </>
  );
}

export default App;
