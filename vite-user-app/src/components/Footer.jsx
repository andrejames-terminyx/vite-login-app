import React from 'react';

const Footer = ({ isLogin, isLoggedIn, onToggleMode }) => {
  // Don't show the toggle when logged in
  if (isLoggedIn) {
    return (
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Enjoying your experience? We're glad you're here! 🎉
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 text-center">
      <p className="text-gray-600">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button
          onClick={onToggleMode}
          className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
        >
          {isLogin ? 'Sign up' : 'Sign in'}
        </button>
      </p>
    </div>
  );
};

export default Footer;