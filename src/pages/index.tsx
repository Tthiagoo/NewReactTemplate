import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'
import { useThemeContext } from '../contexts/ThemeContext'

const Home: React.FC = () => {
  const { toggleTheme } = useThemeContext()
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
      <button onClick={toggleTheme}>change</button>
    </Container>
  )
}

export default Home
