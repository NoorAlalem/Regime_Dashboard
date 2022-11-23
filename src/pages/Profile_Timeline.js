import React from 'react'
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Profile_Timeline_Details from '../components/Profile_Timeline_Details';

function Profile_Timeline() {
  return (
    <>
    <Nav />
    <Sidebar />
    <Profile_Timeline_Details />
    <Footer />
     </>
  )
}

export default Profile_Timeline