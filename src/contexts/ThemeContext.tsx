/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useContext, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { IThemeContextData } from '../DTOs/ThemeDTOs'
import { useToggleTheme } from '../hooks/useToogleTheme'
type Props = {
  children: ReactNode
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData)

export const useTheme = () => useContext(ThemeContext)

export const CustomThemeProvider: React.FC = ({
  children
}: Props): JSX.Element => {
  const [theme, toggleTheme] = useToggleTheme()

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
