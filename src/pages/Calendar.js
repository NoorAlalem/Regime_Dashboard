import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Calendar_Meal from '../components/Calendar_Meal';


function Calendar() {
  return (
    <> 
   
    <Nav />
    <Sidebar />
    <Calendar_Meal />
    <Footer />
  
   </>
  )
}

export default Calendar