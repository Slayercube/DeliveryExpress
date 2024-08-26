import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { myContext } from '../../../Context';

const Login = () => {
  const { setUser , values , setValues } = useContext(myContext);
//   const [values, setValues] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post('http://localhost:3002/users/login', values);
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
        // alert('Login successful');
        navigate('/');
        window.location.reload();
        console.log('Logged in user:', res.data.user);
      } catch (err) {
        console.error('Error logging in:', err);
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Response data:', err.response.data);
          console.error('Response status:', err.response.status);
          console.error('Response headers:', err.response.headers);
          alert(`Error: ${err.response.data}`);
        } else if (err.request) {
          // The request was made but no response was received
          console.error('Request data:', err.request);
          alert('No response received from server');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', err.message);
          alert(`Error: ${err.message}`);
        }
      }
    }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <input 
            type="email" 
            placeholder="Email" 
            onChange={e => setValues({ ...values, email: e.target.value })} 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-6">
          <input 
            type="password" 
            placeholder="Password" 
            onChange={e => setValues({ ...values, password: e.target.value })} 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;