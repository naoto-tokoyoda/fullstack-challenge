// src/components/Navbar.tsx
import React from 'react';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto">
        <ul className="flex justify-end">
          {isAuthenticated && (
            <li>
                <button 
                    type="button" 
                    onClick={handleLogout}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Logout                
                </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
