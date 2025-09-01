import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  icon: Icon,
  showPasswordToggle,
  showPassword,
  onTogglePassword
}) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      <Icon size={20} />
    </div>
    <input
      type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full pl-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
        showPasswordToggle ? 'pr-12' : 'pr-4'
      } ${
        error ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
      }`}
    />
    {showPasswordToggle && (
      <button
        type="button"
        onClick={onTogglePassword}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    )}
    {error && (
      <p className="mt-1 text-sm text-red-600">{error}</p>
    )}
  </div>
);

export default InputField;