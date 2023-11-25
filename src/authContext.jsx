import { createContext, useState, useContext } from 'react';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token) => {
    const decodedToken = jwtDecode(token);
    setUser(decodedToken);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token ? true : false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};