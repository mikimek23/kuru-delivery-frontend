 
import { AuthForm } from '../components/auth/AuthForm'
import { SocialButton } from '../components/auth/SocialButton';
import { ArrowRightIcon, BoxIcon, GitHubIcon, GoogleIcon, LockIcon, LogoIcon, MailIcon } from '../components/auth/SvgIcons'
import { useAuth } from '../contexts/AuthContext';

export const Login =({ onToggle }) => {
  const { login } = useAuth();  // get login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const result = await login({ email, password });

    if (!result.success) {
      setError(result.message || 'Login failed');
    } else {
      console.log('Logged in successfully!');
      // optionally redirect or close modal
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Form Column */}
      <div className="flex flex-col justify-center items-center p-8 bg-gray-50">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="flex items-center justify-center md:justify-start mb-6">
            <LogoIcon className="h-10 w-10 text-orange-500" />
            <span className="ml-3 text-2xl font-bold text-gray-900">Kuru Delivery</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">Welcome Back</h2>
          <p className="text-gray-600 mb-8 text-center md:text-left">Sign in to access your account</p>

          {/* Sign In Form */}
          <div className='w-sm shadow-lg p-6'>
          <form>
            <AuthForm
              id="email"
              name="email"
              type="email"
              value={email}
              label="Email Address"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              icon={<MailIcon className="w-5 h-5 text-gray-400" />}
            />
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockIcon className="w-5 h-5 text-gray-400" />
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-medium text-orange-500 hover:text-orange-600">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600  hover:to-red-600 hover:scale-101 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Sign In <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </form>

          {/* "Or continue with" Separator */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-gray-50 text-sm text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="flex gap-4 mb-8">
            <SocialButton icon={<GoogleIcon />} text="Google" />
            <SocialButton icon={<GitHubIcon />} text="GitHub" />
          </div>
          </div>
          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={onToggle}
              className="font-medium text-orange-500 hover:text-orange-600"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>

      {/* Info Column */}
      <div className="hidden md:flex flex-col justify-center items-center p-12 bg-orange-500 text-white text-center">
        <BoxIcon className="w-24 h-24 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Track. Ship. Deliver.</h1>
        <p className="text-lg text-orange-100 mb-10 max-w-sm">
          Join thousands of businesses that trust Kuru for their delivery needs
        </p>

        <div className="flex gap-6">
          <div className="bg-white/10 p-6 rounded-xl hover:bg-white/20 hover:scale-105">
            <p className="text-3xl font-bold">10k+</p>
            <p className="text-orange-100">Daily Shipments</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl hover:bg-white/20 hover:scale-105">
            <p className="text-3xl font-bold">98%</p>
            <p className="text-orange-100">On-time Rate</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl hover:bg-white/20 hover:scale-105">
            <p className="text-3xl font-bold">50k+</p>
            <p className="text-orange-100">Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};








////sign up
import React from 'react'
import { ArrowRightIcon, BoxIcon, BuildingIcon, CheckIcon, GitHubIcon, GoogleIcon, LockIcon, LogoIcon, MailIcon, UserIcon } from '../components/auth/SvgIcons';
import { SocialButton } from '../components/auth/SocialButton';
import { AuthForm } from '../components/auth/AuthForm';

export const Signup =({ onToggle }) => {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Info Column (Order swapped on desktop) */}
      <div className="hidden md:flex flex-col justify-center items-center p-12 bg-orange-500 text-white text-center">
        <BoxIcon className="w-24 h-24 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Start Shipping Today</h1>
        <p className="text-lg text-orange-100 mb-10 max-w-sm">
          Get set up in minutes and connect with our streamlined delivery partner.
        </p>

        <ul className="space-y-4 w-full max-w-sm">
          {[
            'Real-time delivery tracking',
            'Flexible delivery network',
            '24/7 client support',
            'Easy integrations to E-commerce'
          ].map((item) => (
            <li key={item} className="flex items-center bg-white/10 p-4 rounded-lg hover:bg-white/20 hover:translate-x-1">
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
            <span className="ml-3 text-2xl font-bold text-gray-900">Kuru Delivery</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">Create Account</h2>
          <p className="text-gray-600 mb-8 text-center md:text-left">Get started with your free account</p>

          {/* Sign Up Form */}
          <div className='w-sm shadow-lg p-6'>
          <form>
            <AuthForm
              id="full-name"
              name="full-name"
              type="text"
              label="Full Name"
              placeholder="John Doe"
              icon={<UserIcon className="w-5 h-5 text-gray-400" />}
            />
            <AuthForm
              id="signup-email"
              name="signup-email"
              type="email"
              label="Email Address"
              placeholder="you@example.com"
              icon={<MailIcon className="w-5 h-5 text-gray-400" />}
            />
            <AuthForm
              id="company-name"
              name="company-name"
              type="text"
              label="Company Name"
              placeholder="Your Company Inc."
              icon={<BuildingIcon className="w-5 h-5 text-gray-400" />}
              isOptional={true}
            />
            <AuthForm
              id="signup-password"
              name="signup-password"
              type="password"
              label="Password"
              placeholder="••••••••"
              icon={<LockIcon className="w-5 h-5 text-gray-400" />}
            />
            <AuthForm
              id="confirm-password"
              name="confirm-password"
              type="password"
              label="Confirm Password"
              placeholder="••••••••"
              icon={<LockIcon className="w-5 h-5 text-gray-400" />}
            />

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="font-medium text-orange-500 hover:text-orange-600">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="font-medium text-orange-500 hover:text-orange-600">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:scale-101 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Create Account <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </form>

          {/* "Or sign up with" Separator */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-gray-50 text-sm text-gray-500">Or sign up with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="flex gap-4 mb-8">
            <SocialButton icon={<GoogleIcon />} text="Google" />
            <SocialButton icon={<GitHubIcon />} text="GitHub" />
          </div>
          </div>
          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600">
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

