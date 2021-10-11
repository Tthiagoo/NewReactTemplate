import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
export default function Dashboard() {
  const { user } = useAuth()
  console.log(user)

  return (
    <div>
      <img
        src={`${user?.avatar}`}
        style={{ width: '150px', height: '150px' }}
      />
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  )
}
