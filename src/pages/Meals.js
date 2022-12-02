import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Meals_Table from "../components/Meals_Table";
import Footer from "../components/Footer";


function Meals() {
  return (
    <> 
   
    <Nav />
    <Sidebar />
    <Meals_Table />
    <Footer />
  
   </>
  )
}

export default Meals