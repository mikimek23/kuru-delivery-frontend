import { createContext } from 'react';


const AuthContext = createContext({
  user: null,
  token: null,
  isLoading: false,
  login: async () => ({ success: false, message: 'Not implemented' }),
  signup: async () => ({ success: false, message: 'Not implemented' }),
  logout: () => {},
});

export { AuthContext };