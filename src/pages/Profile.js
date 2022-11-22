import React, { useState } from 'react'
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Profile_Info from '../components/Profile_Info';
import Profile_Timeline from '../components/Profile_Timeline';



function Profile() {



  return (
    <body
      class="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
      data-open="click"
      data-menu="vertical-menu-modern"
      data-col=""
    >
    <Nav />
    <Sidebar />
      <Profile_Info />
      <Footer />
     
    </body>
  );
}

export default Profile;
