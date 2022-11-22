import React from "react";
import FollowUp_Table from "../components/FollowUp_Table";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

function FollowUp() {
  return (
    <>
      <body
        class="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
        data-open="click"
        data-menu="vertical-menu-modern"
        data-col=""
      >
        <Nav />
        <Sidebar />
        <FollowUp_Table />

        <Footer />
      </body>
    </>
  );
}

export default FollowUp;
