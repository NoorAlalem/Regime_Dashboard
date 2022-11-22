import React from "react";
import Nav from "../components/Nav";
import Complaints_Table from "../components/Complaints_Table";
import Footer from "../components/Footer";

import Sidebar from "../components/Sidebar";

function Complaints() {
  return (
    <body
      class="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
      data-open="click"
      data-menu="vertical-menu-modern"
      data-col=""
    >
      <Nav />
      <Sidebar />
      <Complaints_Table />
      <Footer />
    </body>
  );
}

export default Complaints;
