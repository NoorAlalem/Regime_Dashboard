import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Complaints from '../pages/Complaints';
import FollowUp from '../pages/FollowUp';
import Ingredients from '../pages/Ingredients';
import Meals from '../pages/Meals';
import Profile_Complaints from '../pages/Profile_Complaints';
import Profile_Subscription from '../pages/Profile_Subscription';
import Profile_Timeline from '../pages/Profile_Timeline';
import Users from '../pages/Users';
import Edit_Ingredident from './Edit_Ingredident';
import Edit_Meal from './Edit_Meal';
import Nav from './Nav';
import Profile_Complaints_Details from './Profile_Complaints_Details';
import Profile_Edit_Info from './Profile_Edit_Info';
import Profile_Info_Details from './Profile_Info_Details';
import Sidebar from './Sidebar';
import Modal from 'react-modal';
import Calendar from '../pages/Calendar';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

Modal.setAppElement('#root');

function App() {
  return (
    <body
      className='vertical-layout vertical-menu-modern  navbar-floating footer-static'
      data-open='click'
      data-menu='vertical-menu-modern'
      data-col=''
    >
      <div className='App'>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path='/' exact element={<Users />} />
              <Route path='/FollowUp' exact element={<FollowUp />} />
              <Route path='/Complaints' exact element={<Complaints />} />
              <Route
                path='/Profile_Complaints_Details'
                exact
                element={<Profile_Complaints_Details />}
              />
              <Route
                path='/Profile_Info_Details'
                exact
                element={<Profile_Info_Details />}
              />
              <Route
                path='/Profile_Edit_Info'
                exact
                element={<Profile_Edit_Info />}
              />
              <Route
                path='/Profile_Complaints'
                exact
                element={<Profile_Complaints />}
              />
              <Route
                path='/Profile_Timeline'
                exact
                element={<Profile_Timeline />}
              />
              <Route
                path='/Profile_Subscription'
                exact
                element={<Profile_Subscription />}
              />
              <Route path='/Meals' exact element={<Meals />} />
              <Route path='/Ingredients' exact element={<Ingredients />} />
              <Route path='/Edit_Meal' exact element={<Edit_Meal />} />
              <Route
                path='/Edit_Ingredident'
                exact
                element={<Edit_Ingredident />}
              />
              <Route path='/Calendar' exact element={<Calendar />} />
            </Routes>
          </Router>
        </QueryClientProvider>

        <div class='sidenav-overlay'></div>
        <div class='drag-target'></div>
      </div>
    </body>
  );
}

export default App;
