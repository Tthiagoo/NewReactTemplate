import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { getAPIClient } from '../../services/axios'

export const getServerSideProps: GetServerSideProps = async ctx => {
  console.log('getside')
  const { 'nextauth.token': token } = parseCookies(ctx)
  const apiClient = getAPIClient(ctx)
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  // await apiClient.get('/users')

  return {
    props: {}
  }
}

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
