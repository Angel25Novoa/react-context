import React, { useEffect, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  let navigate = useNavigate()
  const { user } = useContext(UserContext)
  const isLoggedIn = !!user

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn])

  return (
    <div>
      <h1>Profile</h1>
      <hr />
      { isLoggedIn ? (
        <>
          <p>
            <strong>Name:</strong> {user.username}
          </p>
        </>
      ) :
        <p>You are not logged in</p>
      }
    </div>
  )
}

export default ProfilePage