import React, { useState } from 'react'
import {AuthForm} from '../../components/auth/AuthForm'
import { ArrowRightIcon, LockIcon, LogoIcon, MailIcon } from '../../components/auth/SvgIcons';
import { StatBox } from '../../components/auth/StatBox';
import {  ChartBarIcon } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth.js';
import { useNavigate } from 'react-router-dom';

export const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    setError('');


    if (username === 'admin@kuru.com' && password === 'dashboard123') {
      
      const result = await login({ email: 'test@kuru.com', role: 'admin' });
      if (result && result.success) {
       
        navigate('/admin');
      } else {
        setError(result.message || 'Failed to sign in via auth provider.');
      }
      return;
    }


    const result = await login({ email: username.trim() });
    if (result && result.success) {
      navigate('/');
    } else {
      setError(result.message || 'Invalid credentials.');
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 font-inter">
      {/* Form Column */}
      <div className="flex flex-col justify-center items-center p-8 bg-gray-50">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="flex items-center justify-center md:justify-start mb-6">
            <LogoIcon className="h-10 w-10 text-orange-600" />
            <span className="ml-3 text-2xl font-bold text-gray-900">Kuru Dashboard</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">
            Administrator Access
          </h2>
          <p className="text-gray-600 mb-8 text-center md:text-left">
            Use your credentials to access the management dashboard
          </p>

          {/* Admin Sign In Form */}
          <div className='w-sm shadow-xl p-8 bg-white rounded-xl'>
            <form onSubmit={handleAdminSubmit}>
              {error && (
                <div className={`p-3 mb-4 rounded-lg text-sm ${error.startsWith('Success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {error}
                </div>
              )}
              
              <AuthForm
                id="admin-email"
                name="admin-email"
                type="text" 
                value={username}
                label="Username or Email"
                placeholder="admin@kuru.co"
                onChange={(e) => setUsername(e.target.value)}
                icon={<MailIcon className="w-5 h-5 text-gray-400" />}
                requred={true}
              />
              
              <div className="mb-6">
                <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    
                  </span>
                  <AuthForm
                    type="password"
                    id="admin-password"
                    name="admin-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    icon={<LockIcon className="w-5 h-5 text-gray-400" />}
                   requred={true}
                  />
                </div>
              </div>

              <div className="flex items-center justify-end mb-6">
                <a href="#" className="text-sm font-medium text-orange-500 hover:text-orange-600 transition duration-150 ease-in-out">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-linear-to-r from-orange-500 to-red-600 transition duration-300 ease-in-out hover:from-orange-600 hover:to-red-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Accessing...' : 'Access Dashboard'}
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
          
          {/* Contact Support Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            <a href="#" className="font-medium hover:text-gray-700 transition duration-150 ease-in-out">
              Need assistance? Contact Support
            </a>
          </p>
        </div>
      </div>

      {/* Info Column */}
      <div className="hidden md:flex flex-col justify-center items-center p-12 bg-gray-900 text-white text-center">
        <ChartBarIcon className="w-24 h-24 mb-6 text-orange-400" />
        <h1 className="text-4xl font-bold mb-4">Centralized Management.</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-sm">
          A dedicated portal for monitoring system performance and managing resources.
        </p>

        <div className="flex flex-col gap-6 w-full max-w-sm">
          <StatBox title="Active Users" value="1,245" color="text-green-300" />
          <StatBox title="Pending Orders" value="128" color="text-yellow-300" />
          <StatBox title="System Health" value="99.9%" color="text-orange-300" />
        </div>
      </div>
    </div>
  );
};
