import React from 'react';
import { User, UserPlus, LogIn } from 'lucide-react';

const Header = ({ isLogin, isLoggedIn, currentUser }) => {
  if (isLoggedIn) {
    return (
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="text-green-600" size={32} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome back!</h1>
        <p className="text-gray-600">You are successfully logged in</p>
      </div>
    );
  }

  return (
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        {isLogin ? <LogIn className="text-blue-600" size={24} /> : <UserPlus className="text-blue-600" size={24} />}
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h1>
      <p className="text-gray-600">
        {isLogin ? 'Sign in to your account' : 'Sign up to get started'}
      </p>
    </div>
  );
};

export default Header;