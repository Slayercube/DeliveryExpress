import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../../Context'
import axios from 'axios'

const Profile = () => {
  const {
    user,
    setUser,
    handleDeleteAccount,
    handleSubmit,
    formData,
    setFormData,
    isEditing,
    setIsEditing,
  } = useContext(myContext)
  // const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) throw new Error('No token found')

        const res = await axios.get('http://localhost:3002/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setUser(res.data)
        setFormData(res.data)
      } catch (err) {
        console.error('Error fetching profile:', err)
      }
    }

    fetchProfile()
  }, [setUser])

  const handleUpdateClick = () => {
    setIsEditing(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  if (!user) return <div className="text-center text-white">Loading...</div>

  return (
    <div className="mb-2 flex min-h-screen items-start justify-center bg-gray-900 pt-10">
      <div className="profile-card max-w-sm transform rounded-lg bg-gray-800 p-8 shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex items-center">
              <img
                className="mr-4 h-16 w-16 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className="rounded bg-gray-700 p-2 text-3xl font-bold text-white"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded bg-gray-700 p-2 text-lg text-gray-400"
                />
              </div>
            </div>
            <div className="text-lg text-gray-300">
              <p className="mb-2">
                <strong>First Name:</strong>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="rounded bg-gray-700 p-2"
                />
              </p>
              <p className="mb-2">
                <strong>Last Name:</strong>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="rounded bg-gray-700 p-2"
                />
              </p>
              <p className="mb-2">
                <strong>Phone:</strong>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded bg-gray-700 p-2"
                />
              </p>
            </div>
            <div className="mt-4 flex space-x-4">
              <button type="submit" className="btn btn-success">
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="mb-4 flex items-center">
              <img
                className="mr-4 h-16 w-16 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div>
                <h1 className="text-3xl font-bold text-white">
                  {user.userName}
                </h1>
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
              <button className="btn btn-warning" onClick={handleUpdateClick}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={handleDeleteAccount}>
                Delete Account
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Profile
