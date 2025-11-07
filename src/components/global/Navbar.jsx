import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/images/kurulogo2.png';
import { useAuth } from '../../hooks/useAuth.js';
import { Moon, Sun } from 'lucide-react';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const mobileRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const commonNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Track Order', path: '/track-order' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const adminNavItems = [
    { name: 'Admin Dashboard', path: '/admin' },
  ];

  const role = user?.role || null;
  const isLoggedIn = Boolean(user);

  const navItemsToRender = role === 'admin' ? [...adminNavItems, ...commonNavItems] : commonNavItems;

  // attach outside-click listener only while mobile menu is open
  useEffect(() => {
    if (!open) return undefined;

    const handleOutsideClick = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [open]);

  // Apply dark mode preference
  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch {
      // ignore
    }
  }, [darkMode]);

  const handleLogout = () => {
    
    try {
      logout && logout();
    } catch {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    }
    toast.info('You have logged out.');
    navigate('/login');
  };

  return (
    <nav className="w-full px-4 py-2 bg-yellow-50 shadow-md fixed top-0 z-40 ">
      <div className="max-w-full mx-auto flex justify-between items-center px-4 py-2 text-2xl">
        <div className="flex items-center gap-3">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Kuru Delivery" className="w-12 h-12 object-contain" />
            <span className="ml-2 text-3xl font-bold text-orange-600">Kuru Delivery</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          {navItemsToRender.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-orange-100 text-orange-500' : 'hover:bg-orange-200 hover:text-orange-600'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className='flex items-baseline justify-end gap-3 ml-10'>
            <button
              onClick={() => setDarkMode((s) => !s)}
              aria-pressed={darkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>

          {isLoggedIn ? (
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              Log Out
            </button>
          ) : (
            <div className='flex gap-3'>
                <NavLink to="/login" onClick={() => setOpen(false)} className="inline-block  text-center hover:bg-orange-100  px-4 py-2 rounded-md">
                  Log In
                </NavLink>
                <NavLink to="/signup" onClick={() => setOpen(false)} className="inline-block  text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                  Sign Up
                </NavLink>
                </div>
          )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          id="mobile-menu-button"
          className="lg:hidden p-2 rounded-md text-gray-600"
          onClick={(e) => { e.stopPropagation(); setOpen((s) => !s); }}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div ref={mobileRef} id="mobile-menu" className="absolute left-0 top-16 w-full  bg-yellow-50 shadow-md rounded-md py-3 px-4 lg:hidden z-50 text-2xl">
            {navItemsToRender.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block px-4 py-2 text-left ${isActive ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-orange-100 hover:text-orange-600'}`}
              >
                {item.name}
              </NavLink>
            ))}

            <div className="mt-2 px-3">
              {isLoggedIn ? (
                <button onClick={() => { setOpen(false); handleLogout(); }} className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                  Log Out
                </button>
              ) : (
                <div className='flex flex-col gap-1'>
                    <NavLink to="/login" onClick={() => setOpen(false)} className="inline-block w-full text-center hover:bg-orange-500  px-4 py-2 rounded-md shadow-md border border-orange-100">
                  Log In
                </NavLink>
                <NavLink to="/signup" onClick={() => setOpen(false)} className="inline-block  text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                  Sign Up
                </NavLink>
                </div>
              )}
              {/* Mobile dark mode toggle */}
              <div className="mt-3 px-4">
                <button
                  onClick={() => { setDarkMode((s) => !s); setOpen(false); }}
                  aria-pressed={darkMode}
                  aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-200 hover:bg-orange-300 text-gray-700"
                >
                  {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
                  <span className="text-sm">{darkMode ? 'Light' : 'Dark'} mode</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};



