import React from 'react';
import InputField from './InputField.jsx';
import Dashboard from './Dashboard.jsx';
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
  
  // If logged in, show dashboard
  if (isLoggedIn && currentUser) {
    return <Dashboard currentUser={currentUser} onLogout={onLogout} />;
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