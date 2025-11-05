import { useAuth } from './useAuth.js';

export const useUser = () => {
  const { user } = useAuth();
  return user;
};