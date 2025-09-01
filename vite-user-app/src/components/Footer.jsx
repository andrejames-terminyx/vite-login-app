import React from 'react';
import { siGithub } from 'simple-icons';

const Footer = ({ isLogin, isLoggedIn, onToggleMode }) => {
  // Don't show the toggle when logged in
  if (isLoggedIn) {
    return (
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            ©2025 "COMPANY NAME"
          </p>
            <a
            href="https://github.com/terminyx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d={siGithub.path} />
            </svg>
          </a>
        </div>
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