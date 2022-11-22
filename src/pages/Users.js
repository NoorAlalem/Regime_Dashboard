import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Users_Table from "../components/Users_Table";

function Users() {
  return (
    <body
      class="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
      data-open="click"
      data-menu="vertical-menu-modern"
      data-col=""
    >
      <Nav />
      <Sidebar />
      <Users_Table />
      <Footer />
    </body>
  );
}

export default Users;
