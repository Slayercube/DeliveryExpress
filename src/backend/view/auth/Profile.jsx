import { useContext, useEffect } from 'react';
import './profile.css';
import { myContext } from '../../../Context';
import axios from 'axios';


const Profile = () => {
  const { user, setUser } = useContext(myContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3002/users/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    fetchProfile();
  }, [setUser]);
 

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:3002/user/delete/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('User deleted successfully:', response.data);
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };
  if (!user) return <div className="text-center text-white">Loading...</div>;

  return (
    <div className="mb-2 flex min-h-screen items-start justify-center bg-gray-900 pt-10">
      <div className="profile-card max-w-sm transform rounded-lg bg-gray-800 p-8 shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="mb-4 flex items-center">
          <img
            className="mr-4 h-16 w-16 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div>
            <h1 className="text-3xl font-bold text-white">{user.userName}</h1>
            <p className="text-lg text-gray-400">{user.email}</p>
          </div>
        </div>
        <div className="text-lg text-gray-300">
          <p className="mb-2">
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p className="mb-2">
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
        <div className="mt-4 flex space-x-4">
          <button className="btn btn-warning">Edit</button>
          <button className="btn btn-danger" onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;