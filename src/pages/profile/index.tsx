import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
export default function Dashboard() {
  const { user } = useAuth()
  console.log(user)

  return <div></div>
}
