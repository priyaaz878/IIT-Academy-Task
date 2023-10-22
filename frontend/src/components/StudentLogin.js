import React, { useState } from 'react';
import '../Studentteacher.css';


const StudentLogin = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to the login view
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleView = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' }); // Clear the form
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
   

      
      <h1>{isLogin ? 'Student Login' : 'Student Signup'}</h1>
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
        <button className="bubbly-button" type="submit">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p onClick={toggleView}>
        {isLogin
          ? 'Don’t have an account? Sign up here.'
          : 'Already have an account? Log in here.'}
      </p>
    </div>
    </div>
    

   

  );
};

export default StudentLogin;