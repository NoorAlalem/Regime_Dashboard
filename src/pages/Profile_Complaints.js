import React from 'react'
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Profile_Complaints_Details from '../components/Profile_Complaints_Details';

function Profile_Complaints() {
  return (
    <>
    <Nav />
    <Sidebar />
      <Profile_Complaints_Details />
      <Footer />
     </>
  )
}
 
export default Profile_Complaints