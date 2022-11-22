import React, {useState} from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Users_Table from "../components/Users_Table";

function Users() {



  return (
   <>
      <Nav />
      <Sidebar />
      <Users_Table />
      <Footer />
    </>
  );
}

export default Users;
