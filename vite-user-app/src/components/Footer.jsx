import React from 'react';

const Footer = ({ isLogin, isLoggedIn, onToggleMode }) => {
  if (isLoggedIn) {
    return (
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600 text-center">
          Session active - Your data is secure
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Mode Toggle */}
      <div className="text-center mt-6">
        <p className="text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={onToggleMode}
            className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>

      {/* Demo Info */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600 text-center">
          Demo app - Data is stored in browser memory only
        </p>
      </div>
    </div>
  );
};

export default Footer;