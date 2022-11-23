import React from 'react'
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Profile_Subscription_Details from '../components/Profile_Subscription_Details';

function Profile_Subscription() {
  return (
    <>
    <Nav />
    <Sidebar />
    <Profile_Subscription_Details />
    <Footer />
     </>
  )
}

export default Profile_Subscription