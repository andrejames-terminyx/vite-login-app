import React from 'react';
import InputField from './InputField.jsx';
import { User, Mail, Lock } from 'lucide-react';

const Body = ({ 
  isLogin, 
  isLoggedIn, 
  formData, 
  errors, 
  showPassword, 
  showConfirmPassword, 
  currentUser,
  onInputChange, 
  onTogglePassword, 
  onToggleConfirmPassword, 
  onSubmit, 
  onLogout 
}) => {
  
  // If logged in, show user dashboard
  if (isLoggedIn && currentUser) {
    return (
      <div className="space-y-6">
        {/* User Details Card */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Your Account Details
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600 font-medium">User ID:</span>
              <span className="text-gray-800 font-semibold">#{currentUser.id}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Username:</span>
              <span className="text-gray-800 font-semibold">{currentUser.username}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Email:</span>
              <span className="text-gray-800 font-semibold">{currentUser.email}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Account Status:</span>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                currentUser.is_active 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {currentUser.is_active ? 'Active' : 'Inactive'}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Member Since:</span>
              <span className="text-gray-800 font-semibold">
                {new Date(currentUser.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            {currentUser.updated_at && (
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">Last Updated:</span>
                <span className="text-gray-800 font-semibold">
                  {new Date(currentUser.updated_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={onLogout}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 transform hover:scale-105 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  // If not logged in, show login/signup form
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {/* Name field (only for signup) */}
        {!isLogin && (
          <InputField
            type="text"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            placeholder="Enter your full name"
            error={errors.name}
            icon={User}
          />
        )}

        {/* Email field */}
        <InputField
          type="email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          placeholder="Enter your email"
          error={errors.email}
          icon={Mail}
        />

        {/* Password field */}
        <InputField
          type="password"
          name="password"
          value={formData.password}
          onChange={onInputChange}
          placeholder="Enter your password"
          error={errors.password}
          icon={Lock}
          showPasswordToggle={true}
          showPassword={showPassword}
          onTogglePassword={onTogglePassword}
        />

        {/* Confirm Password field (only for signup) */}
        {!isLogin && (
          <InputField
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={onInputChange}
            placeholder="Confirm your password"
            error={errors.confirmPassword}
            icon={Lock}
            showPasswordToggle={true}
            showPassword={showConfirmPassword}
            onTogglePassword={onToggleConfirmPassword}
          />
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={onSubmit}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 transform hover:scale-105"
      >
        {isLogin ? 'Sign In' : 'Create Account'}
      </button>
    </div>
  );
};

export default Body;