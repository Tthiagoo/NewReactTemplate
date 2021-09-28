import React from 'react'
import { Main, Header } from '../styles/pages/Home'
import { useThemeContext } from '../contexts/ThemeContext'

const Home: React.FC = () => {
  const { toggleTheme } = useThemeContext()
  return (
    <Main>
      <Header>
        <button onClick={toggleTheme}>change</button>
      </Header>
    </Main>
  )
}

export default Home
