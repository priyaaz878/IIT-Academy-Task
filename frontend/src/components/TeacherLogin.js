import React, { useState } from 'react';
import '../Studentteacher.css';
import { handleForgotPasswordClick } from './authUtils'; 


const TeacherLogin = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '', 
    address: '', 
  });

  const toggleView = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '', 
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup or login logic here based on the isLogin state
    if (isLogin) {
      // Login logic
      console.log('Login Form Data:', formData);
    } else {
      // Signup logic
      console.log('Signup Form Data:', formData);
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <h1>{isLogin ? 'Teacher Login' : 'Teacher Signup'}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {!isLogin && (
            <input
              type="text"
              name="phone"
              placeholder="Enter your Phone Number" // Phone input
              value={formData.phone}
              onChange={handleInputChange}
            />
          )}
          {!isLogin && (
            <input
              type="text"
              name="address"
              placeholder="Enter your Address" // Address input
              value={formData.address}
              onChange={handleInputChange}
            />
          )}
          <button className="bubbly-button" type="submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p onClick={toggleView}>
          {isLogin
            ? 'Don’t have an account? Sign up here.'
            : 'Already have an account? Log in here.'}
        </p>
        <p>
        <a
  href="/ForgotPassword"
  onClick={handleForgotPasswordClick}
  className="forgot-password-link"
>
  Forgot Password?
</a>


        </p>
      </div>
    </div>
  );
};

export default TeacherLogin;
