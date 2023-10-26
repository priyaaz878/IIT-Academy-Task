// authUtils.js 
import axios from 'axios';


 export const handleForgotPasswordClick = async () => {
    const email = prompt('Enter your email address:');
  
    if (email) {
      try {
    
        const response = await axios.post('http://localhost:3000/api/forgotpassword', { email });

  
        if (response.data.success) {
          alert('Password reset instructions sent to your email.');
        } else {
          alert('Password reset failed. Please check your email or contact support.');
        }
      } catch (error) {
        console.error('Password reset error:', error);
        alert('Password reset failed. Please check your internet connection or contact support.');
      }
    }
  };
  
  export default handleForgotPasswordClick;