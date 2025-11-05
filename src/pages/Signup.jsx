import React, { useState } from 'react';
import {
  ArrowRightIcon,BoxIcon,BuildingIcon,CheckIcon,GitHubIcon,GoogleIcon,LockIcon,LogoIcon,MailIcon,UserIcon,
} from '../components/auth/SvgIcons.jsx'; 
import { SocialButton } from '../components/auth/SocialButton.jsx'; 
import { AuthForm } from '../components/auth/AuthForm.jsx'; 
import { useAuth } from '../hooks/useAuth.js'; 

export const Signup = ({ onToggle }) => {
  const { signup, isLoading } = useAuth();

 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill out all required fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    if (!agreed) {
      setError('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }

    const result = await signup({
      fullName,
      email,
      companyName: companyName || undefined, 
      password,
    });

    if (!result.success) {
      setError(result.message || 'Signup failed. Please try again.');
    } else {
      console.log('Signed up successfully!');
      
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Info Column (Order swapped on desktop) */}
      <div className="hidden md:flex flex-col justify-center items-center p-12 bg-orange-500 text-white text-center">
        <BoxIcon className="w-24 h-24 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Start Shipping Today</h1>
        <p className="text-lg text-orange-100 mb-10 max-w-sm">
          Get set up in minutes and connect with our streamlined delivery
          partner.
        </p>

        <ul className="space-y-4 w-full max-w-sm">
          {[
            'Real-time delivery tracking',
            'Flexible delivery network',
            '24/7 client support',
            'Easy integrations to E-commerce',
          ].map((item) => (
            <li
              key={item}
              className="flex items-center bg-white/10 p-4 rounded-lg hover:bg-white/20 hover:translate-x-1 transition-transform"
            >
              <CheckIcon className="w-5 h-5 text-white mr-3" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Form Column */}
      <div className="flex flex-col justify-center items-center p-8 bg-gray-50">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="flex items-center justify-center md:justify-start mb-6">
            <LogoIcon className="h-10 w-10 text-orange-500" />
            <span className="ml-3 text-2xl font-bold text-gray-900">
              Kuru Delivery
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">
            Create Account
          </h2>
          <p className="text-gray-600 mb-8 text-center md:text-left">
            Get started with your free account
          </p>

          {/* Sign Up Form */}
          <div className="w-sm shadow-lg p-6 rounded-lg bg-white">
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                  <p>{error}</p>
                </div>
              )}

              <AuthForm
                id="full-name"
                name="full-name"
                type="text"
                label="Full Name"
                placeholder="John Doe"
                icon={<UserIcon className="w-5 h-5 text-gray-400" />}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <AuthForm
                id="signup-email"
                name="signup-email"
                type="email"
                label="Email Address"
                placeholder="you@example.com"
                icon={<MailIcon className="w-5 h-5 text-gray-400" />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <AuthForm
                id="company-name"
                name="company-name"
                type="text"
                label="Company Name"
                placeholder="Your Company Inc."
                icon={<BuildingIcon className="w-5 h-5 text-gray-400" />}
                isOptional={true}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <AuthForm
                id="signup-password"
                name="signup-password"
                type="password"
                label="Password"
                placeholder="•••••••• (8+ characters)"
                icon={<LockIcon className="w-5 h-5 text-gray-400" />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <AuthForm
                id="confirm-password"
                name="confirm-password"
                type="password"
                label="Confirm Password"
                placeholder="••••••••"
                icon={<LockIcon className="w-5 h-5 text-gray-400" />}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-700">
                    I agree to the{' '}
                    <a
                      href="#"
                      className="font-medium text-orange-500 hover:text-orange-600"
                    >
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a
                      href="#"
                      className="font-medium text-orange-500 hover:text-orange-600"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 hover:scale-101 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
                {!isLoading && <ArrowRightIcon className="w-5 h-5 ml-2" />}
              </button>
            </form>

            {/* "Or sign up with" Separator */}
            <div className="relative my-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white text-sm text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="flex gap-4 mb-8">
              <SocialButton icon={<GoogleIcon />} text="Google" />
              <SocialButton icon={<GitHubIcon />} text="GitHub" />
            </div>
          </div>
          {/* Sign In Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={onToggle}
              className="font-medium text-orange-500 hover:text-orange-600"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};