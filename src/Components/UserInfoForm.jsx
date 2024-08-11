import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfoForm = () => {
  const [userInfo, setUserInfo] = useState({ firstName: '', lastName: '', email: '', address: '', zipCode: '', province: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { state: { userInfo } });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Information</h2>
      <div className="mb-4 flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={userInfo.address}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4 flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Zip Code</label>
          <input
            type="number"
            name="zipCode"
            value={userInfo.zipCode}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700">State</label>
          <input
            type="text"
            name="province"
            value={userInfo.province}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Next
      </button>
    </form>
  );
};

export default UserInfoForm;