import { useContext, useState, createContext } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post(
        'https://mealsandingrdents-server-production.up.railway.app/dashboard/auth/login',
        { email, password },
        config
      );
      setToken(data.token);
      var decoded = jwt_decode(data.token);
      setUser(decoded.id);

      localStorage.setItem('tokenRegimeDashbord', data.token);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError(null);
      }, 5000);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('tokenRegimeDashbord');
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
  };

  const loadUser = async () => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    try {
      const { data } = await axios.get(
        'https://mealsandingrdents-server-production.up.railway.app/dashboard/auth'
      );
      setUser(data.user);
      setIsAuthenticated(true);
    } catch (error) {
      localStorage.removeItem('tokenRegimeDashbord');
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        token,
        error,
        loadUser,
        loading,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
