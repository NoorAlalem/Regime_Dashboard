import React, { useState } from 'react'
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Profile_Info from '../components/Profile_Info';
import Profile_Timeline from '../components/Profile_Timeline';



function Profile() {



  return (
   <>
    <Nav />
    <Sidebar />
      <Profile_Info />
      <Footer />
     </>
  );
}

export default Profile;
