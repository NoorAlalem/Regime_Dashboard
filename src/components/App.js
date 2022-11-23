import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Complaints from "../pages/Complaints";
import FollowUp from "../pages/FollowUp";
import Profile_Complaints from "../pages/Profile_Complaints";
import Profile_Subscription from "../pages/Profile_Subscription";
import Profile_Timeline from "../pages/Profile_Timeline";
import Users from "../pages/Users";
import Nav from "./Nav";
import Profile_Complaints_Details from "./Profile_Complaints_Details";
import Profile_Edit_Info from "./Profile_Edit_Info";
import Profile_Info_Details from "./Profile_Info_Details";
import Sidebar from "./Sidebar";

function App() {
  return (
    
       <body
    className='vertical-layout vertical-menu-modern  navbar-floating footer-static'
    data-open="click"
    data-menu="vertical-menu-modern"
    data-col=""
  >
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Users />} />
          <Route path="/FollowUp" exact element={<FollowUp />} />
          <Route path="/Complaints" exact element={<Complaints />} />
          <Route
            path="/Profile_Complaints_Details"
            exact
            element={<Profile_Complaints_Details />}
          />
           <Route path="/Profile_Info_Details" exact element={<Profile_Info_Details />} />
           <Route path="/Profile_Edit_Info" exact element={<Profile_Edit_Info />} />
           <Route path="/Profile_Complaints" exact element={<Profile_Complaints />} />
           <Route path="/Profile_Timeline" exact element={<Profile_Timeline />} />
           <Route path="/Profile_Subscription" exact element={<Profile_Subscription />} />
        </Routes>
      </Router>
      <div class="sidenav-overlay"></div>
      <div class="drag-target"></div>
      
    </div>
    </body>
  );
}

export default App;
