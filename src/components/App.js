import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Complaints from "../pages/Complaints";
import FollowUp from "../pages/FollowUp";
import Profile from "../pages/Profile";
import Users from "../pages/Users";
import Nav from "./Nav";
import Profile_Complaints from "./Profile_Complaints";
import Profile_Info from "./Profile_Info";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Users />} />
          <Route path="/FollowUp" exact element={<FollowUp />} />
          <Route path="/Complaints" exact element={<Complaints />} />
          <Route path="/Profile" exact element={<Profile />} />
          <Route
            path="/Profile_Complaints"
            exact
            element={<Profile_Complaints />}
          />
           <Route path="/Profile_Info" exact element={<Profile_Info />} />
        </Routes>
      </Router>
      <div class="sidenav-overlay"></div>
      <div class="drag-target"></div>
    </div>
  );
}

export default App;
