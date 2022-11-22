import React from "react";
import FollowUp_Table from "../components/FollowUp_Table";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

function FollowUp() {
  return (
    <>
   
        <Nav />
        <Sidebar />
        <FollowUp_Table />

        <Footer />
    
    </>
  );
}

export default FollowUp;
