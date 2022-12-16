import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Profile_Complaints_Details from '../components/Profile_Complaints_Details';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
function Profile_Complaints() {
  const { userId } = useParams();
  const fetchUser = async ({ queryKey }) => {
    const response = await fetch(
      `https://mealsandingrdents-server-production.up.railway.app/dashboard/user/${userId}`
    );
    const data = await response.json();
    console.log(data.data);
    return data.data;
  };

  const { data, status, isPreviousData } = useQuery('user', fetchUser, {
    keepPreviousData: true,
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching data</div>;
  }
  return (
    <>
      <Nav />
      <Sidebar />
      <Profile_Complaints_Details user={data} userId={userId} />
      <Footer />
    </>
  );
}

export default Profile_Complaints;
