import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
export default function Dashboard() {
  const { user } = useAuth()
  console.log(user)

  return (
    <div>
      foto do user
      <img
        src={user.avatar}
        alt=""
        style={{ width: '200px', height: '200px', borderRadius: '50%' }}
      />
      <p>
        nome do user: {user.name}
        <br />
        email do user: {user.email}
      </p>
    </div>
  )
}
