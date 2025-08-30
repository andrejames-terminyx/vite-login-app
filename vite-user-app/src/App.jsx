import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && (!formData.name || formData.name.trim().length < 2)) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    if (isLogin) {
      // 🔹 Login logic - for now using the simple endpoint
      try {
        const response = await fetch("http://127.0.0.1:8000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (data.success) {
          // Set current user from the response data
          setCurrentUser(data.user);
          setIsLoggedIn(true);
        } else {
          setErrors({ email: data.message || "Login failed" });
        }
      } catch (err) {
        console.error("Error logging in:", err);
        setErrors({ email: "Server error, try again later" });
      }
    } else {
      // 🔹 Signup logic - connect to FastAPI /users endpoint
      try {
        const response = await fetch("http://127.0.0.1:8000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Registration successful
          alert("Account created successfully! You can now log in.");
          
          // Switch to login mode and clear form
          setIsLogin(true);
          setFormData({ name: '', email: '', password: '', confirmPassword: '' });
          setErrors({});
          
          // Update users list
          setUsers(prev => [...prev, data]);
        } else {
          // Handle registration errors
          if (data.detail) {
            if (data.detail.includes("Username")) {
              setErrors({ name: data.detail });
            } else if (data.detail.includes("Email")) {
              setErrors({ email: data.detail });
            } else {
              setErrors({ email: data.detail });
            }
          } else {
            setErrors({ email: "Registration failed. Please try again." });
          }
        }
      } catch (err) {
        console.error("Error signing up:", err);
        setErrors({ email: "Server error, try again later" });
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  // If logged in, render dashboard without the card container
  if (isLoggedIn && currentUser) {
    return (
      <div>
      <Body 
        isLogin={isLogin}
        isLoggedIn={isLoggedIn}
        formData={formData}
        errors={errors}
        showPassword={showPassword}
        showConfirmPassword={showConfirmPassword}
        currentUser={currentUser}
        onInputChange={handleInputChange}
        onTogglePassword={() => setShowPassword(!showPassword)}
        onToggleConfirmPassword={() => setShowConfirmPassword(!showConfirmPassword)}
        onSubmit={handleSubmit}
        onLogout={handleLogout}
      />
      
      {/* Footer with padding */}
      <div className="px-8 pb-8">
        <Footer 
          isLogin={isLogin}
          isLoggedIn={isLoggedIn}
          onToggleMode={toggleMode}
        />
      </div>
    </div>
    );
  }

  // If not logged in, render login/signup form with card container
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* Header Section */}
        <Header 
          isLogin={isLogin}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
        />

        {/* Body Section */}
        <Body 
          isLogin={isLogin}
          isLoggedIn={isLoggedIn}
          formData={formData}
          errors={errors}
          showPassword={showPassword}
          showConfirmPassword={showConfirmPassword}
          currentUser={currentUser}
          onInputChange={handleInputChange}
          onTogglePassword={() => setShowPassword(!showPassword)}
          onToggleConfirmPassword={() => setShowConfirmPassword(!showConfirmPassword)}
          onSubmit={handleSubmit}
          onLogout={handleLogout}
        />

        {/* Footer Section */}
        <Footer 
          isLogin={isLogin}
          isLoggedIn={isLoggedIn}
          onToggleMode={toggleMode}
        />
      </div>
    </div>
  );
};

export default App;