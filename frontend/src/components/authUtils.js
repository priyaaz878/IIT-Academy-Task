// authUtils.js

import axios from 'axios';

export const handleForgotPasswordClick = async () => {
  try {
    const email = prompt('Enter your registered email address:');
    if (email) {
      // Sent a request to the backend for a password reset
      const response = await axios.post('/api/forgot-password', { email });

      if (response.data.success) {
        alert('Password reset email sent. Please check your email.');
      } else {
        alert('Password reset request failed. Please try again later.');
      }
    }
  } catch (error) {
    console.error('Error sending password reset request:', error);
  }
};
