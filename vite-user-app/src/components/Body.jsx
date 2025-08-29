import React from 'react';
import { User, Mail, Lock, UserPlus, LogIn } from 'lucide-react';
import InputField from './InputField.jsx';

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
  if (isLoggedIn) {
    return (
      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">Logged in as:</p>
          <p className="font-semibold text-gray-800">{currentUser?.name || 'User'}</p>
          <p className="text-gray-600">{currentUser?.email}</p>
        </div>

        <button
          onClick={onLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {!isLogin && (
        <InputField
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={onInputChange}
          error={errors.name}
          icon={User}
        />
      )}

      <InputField
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={onInputChange}
        error={errors.email}
        icon={Mail}
      />

      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={onInputChange}
        error={errors.password}
        icon={Lock}
        showPasswordToggle={true}
        showPassword={showPassword}
        onTogglePassword={onTogglePassword}
      />

      {!isLogin && (
        <InputField
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={onInputChange}
          error={errors.confirmPassword}
          icon={Lock}
          showPasswordToggle={true}
          showPassword={showConfirmPassword}
          onTogglePassword={onToggleConfirmPassword}
        />
      )}

      <button
        onClick={onSubmit}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {isLogin ? <LogIn size={20} /> : <UserPlus size={20} />}
        {isLogin ? 'Sign In' : 'Create Account'}
      </button>
    </div>
  );
};

export default Body;