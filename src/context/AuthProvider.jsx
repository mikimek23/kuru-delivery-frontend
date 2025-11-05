import React, { useState, useMemo } from 'react';
import { AuthContext } from './authContext.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js'; 

const MOCK_USER_DATA = {
  id: 'user-123',
  fullName: 'Mock User',
  email: 'test@kuru.com',
  companyName: 'Mock Delivery Co.',
};
const MOCK_TOKEN = 'mock-auth-token-12345';
const MOCK_DELAY = 1000; 

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('auth_user', null);
  const [token, setToken] = useLocalStorage('auth_token', null);
  const [isLoading, setIsLoading] = useState(false);

  const mockApiCall = (success, data, error) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (success) {
          resolve({ success: true, data });
        } else {
          resolve({ success: false, message: error || 'Mock API error' });
        }
      }, MOCK_DELAY);
    });
  };

  const login = async ({ email }) => {
    setIsLoading(true);

    const result = await mockApiCall(true, {
        user: MOCK_USER_DATA,
        token: MOCK_TOKEN
    }, 'Mock login failed');

    if (result.success && email === MOCK_USER_DATA.email) {
      setUser(result.data.user);
      setToken(result.data.token);
      setIsLoading(false);
      return { success: true, user: result.data.user };
    } else {
      const message = email !== MOCK_USER_DATA.email
        ? `Login failed. Use the mock email: ${MOCK_USER_DATA.email}`
        : result.message;

      setUser(null);
      setToken(null);
      setIsLoading(false);
      return { success: false, message };
    }
  };

  const signup = async (userData) => {
    setIsLoading(true);

    const newUser = {
        ...MOCK_USER_DATA,
        ...userData,
        id: 'new-user-' + Math.random().toString(16).slice(2)
    };
    const newToken = 'new-mock-token-' + Math.random().toString(16).slice(2);

    const result = await mockApiCall(true, {
        user: newUser,
        token: newToken
    }, 'Mock signup failed');


    if (result.success) {
      setUser(result.data.user);
      setToken(result.data.token);
      setIsLoading(false);
      return { success: true, user: result.data.user };
    } else {
      setUser(null);
      setToken(null);
      setIsLoading(false);
      return { success: false, message: result.message };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const contextValue = useMemo(
    () => ({
      user,
      token,
      isLoading,
      login,
      signup,
      logout,
    }),
    [user, token, isLoading]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};