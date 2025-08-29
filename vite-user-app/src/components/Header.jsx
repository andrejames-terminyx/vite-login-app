import React from 'react';

const Header = ({ isLogin, isLoggedIn, currentUser }) => {
  if (isLoggedIn && currentUser ) {
    return (
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">
            {currentUser.username.charAt(0).toUpperCase()}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back!
        </h1>
        <p className="text-gray-600">
          You're logged in as <span className="font-semibold text-blue-600">{currentUser.username}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h1>
      <p className="text-gray-600">
        {isLogin ? 'Sign in to your account' : 'Join us today'}
      </p>
    </div>
  );
};

export default Header;