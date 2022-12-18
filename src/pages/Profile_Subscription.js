import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Profile_Subscription_Details from '../components/Profile_Subscription_Details';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useAuth } from '../store/login-context';

function Profile_Subscription() {
  const { token } = useAuth();

  const { userId } = useParams();
  const fetchUser = async ({ queryKey }) => {
    const response = await fetch(
      `https://mealsandingrdents-server-production.up.railway.app/dashboard/user/${userId}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
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
      <Profile_Subscription_Details user={data} userId={userId} />
      <Footer />
    </>
  );
}

export default Profile_Subscription;
