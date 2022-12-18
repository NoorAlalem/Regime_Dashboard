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
import Login from '../pages/Login';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../App.css';
import { AuthProvider } from '../store/login-context';
import Protected from './Protected';

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
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <Router>
              <Routes>
                <Route path='/login' exact element={<Login />} />
                <Route path='/' element={<Protected />}>
                  <Route path='/' exact element={<Users />} />
                </Route>
                <Route path='/FollowUp' element={<Protected />}>
                  <Route path='/FollowUp' exact element={<FollowUp />} />
                </Route>
                <Route path='/Complaints' element={<Protected />}>
                  <Route path='/Complaints' exact element={<Complaints />} />
                </Route>
                <Route
                  path='/Profile_Complaints_Details'
                  element={<Protected />}
                >
                  <Route
                    path='/Profile_Complaints_Details'
                    exact
                    element={<Profile_Complaints_Details />}
                  />
                </Route>
                <Route path='/Profile_Info_Details' element={<Protected />}>
                  <Route
                    path='/Profile_Info_Details'
                    exact
                    element={<Profile_Info_Details />}
                  />
                </Route>
                <Route path='/Profile_Edit_Info' element={<Protected />}>
                  <Route
                    path='/Profile_Edit_Info'
                    exact
                    element={<Profile_Edit_Info />}
                  />
                </Route>
                <Route path='/user-complaints/:userId' element={<Protected />}>
                  <Route
                    path='/user-complaints/:userId'
                    element={<Profile_Complaints />}
                  />
                </Route>
                <Route path='/user-timeline/:userId' element={<Protected />}>
                  <Route
                    path='/user-timeline/:userId'
                    element={<Profile_Timeline />}
                  />
                </Route>
                <Route
                  path='/user-subscription/:userId'
                  element={<Protected />}
                >
                  <Route
                    path='/user-subscription/:userId'
                    element={<Profile_Subscription />}
                  />
                </Route>
                <Route path='/Meals' element={<Protected />}>
                  <Route path='/Meals' exact element={<Meals />} />
                </Route>
                <Route path='/Ingredients' element={<Protected />}>
                  <Route path='/Ingredients' exact element={<Ingredients />} />
                </Route>
                <Route path='/Calendar' element={<Protected />}>
                  <Route path='/Calendar' exact element={<Calendar />} />
                </Route>
                <Route
                  path='/ingredident/:ingredidentId'
                  element={<Protected />}
                >
                  <Route
                    path='/ingredident/:ingredidentId'
                    element={<Edit_Ingredident />}
                  />
                </Route>
                <Route path='/meal/:mealId' element={<Protected />}>
                  <Route path='/meal/:mealId' element={<Edit_Meal />} />
                </Route>
              </Routes>
            </Router>
          </QueryClientProvider>
        </AuthProvider>

        <div class='sidenav-overlay'></div>
        <div class='drag-target'></div>
      </div>
    </body>
  );
}

export default App;
