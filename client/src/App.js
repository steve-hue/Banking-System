import React from "react"
import './App.css';
import Navbar from "./Navbar"
import Home from "./pages/Home"
import  Customers from "./pages/Customers"
import Transfer from "./pages/Transfer"
import History from "./pages/History"
import Footer from "./Footer"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers/"  element={<Customers />} />
        <Route path="/customers/:id"  element={<Transfer  />} />
        <Route path="/history"  element={<History />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
