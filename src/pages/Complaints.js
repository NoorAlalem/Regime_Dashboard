import React from "react";
import Nav from "../components/Nav";
import Complaints_Table from "../components/Complaints_Table";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Complaints() {
  return (
    <> 
   
      <Nav />
      <Sidebar />
      <Complaints_Table />
      <Footer />
    
     </>
  );
}

export default Complaints;
