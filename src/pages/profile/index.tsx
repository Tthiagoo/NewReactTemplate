import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
export default function Profile() {
  const { user } = useAuth()
  console.log(user)

  return (
    <div>
      <img
        src={user?.avatar}
        alt=""
        style={{ width: '100px', height: '100px' }}
      />
      <p>{user?.email}</p>
      <p>{user?.name}</p>
    </div>
  )
}
