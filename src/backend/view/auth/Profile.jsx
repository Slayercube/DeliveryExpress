import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../../Context'
import axios from 'axios'
import styles from './Profile.module.css'

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
    <div className="mb-2 flex min-h-screen  max-w-sm md:max-w-md  mx-auto lg:max-w-lg items-center justify-center bg-dark-900">
      <div className={`profileCard bg-gray-800 p-8 shadow-lg transition duration-500 hover:scale-105 ${styles.editContainer} ${styles.profileCard}`}>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4  flex justify-center mx-auto ms-10  items-center">
              <img
                className="mr-4 h-16 w-16 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile-Image"
              />
              <div>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className="rounded ms-2  h-10 p-2 bg-light text-dark"
                />
                
            </div>
              </div>
            <div className="text-lg text-gray-300">

            <p className='mb-2 ms-1'>
              <strong className={`emailEdit ${styles.emailEdit}`}>Email :</strong>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded bg-light text-dark ms-5 p-2"
                />
                </p>


              <p className="mb-2">
                <strong className={`firstNameEdit ${styles.firstNameEdit}`}>First Name :</strong>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="rounded bg-light text-dark ms-2 p-2"
                />
              </p>
              <p className="mb-2">
                <strong className={`lastNameEdit ${styles.lastNameEdit}`}>Last Name :</strong>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="rounded bg-light text-dark ms-3 p-2"
                />
              </p>
              <p className="mb-2">
                <strong className={`phoneEdit ${styles.phoneEdit}`}>Phone :</strong>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded bg-light text-dark ms-5 p-2"
                />
              </p>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <button type="submit" className="ms-3  btn btn-success">
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger px-3"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="mb-4 flex justify-center items-center">
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
              <p className="mb-3">
                <strong className={`FirstName pe-3 ${styles.firstName}`}>First Name :</strong> {user.firstName}
              </p>
              <p className="mb-3">
                <strong className={`lastName pe-3 ${styles.lastName}`}>Last Name :</strong> {user.lastName}
              </p>
              <p className="mb-3">
                <strong className={`phone ms-4 ps-2 pe-3 ${styles.phone}`}>Phone :</strong> {user.phone}
              </p>
            </div>
            <div className="mt-5 flex justify-center space-x-4">
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
