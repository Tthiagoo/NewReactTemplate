/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode
} from 'react'
import { ThemeProvider } from 'styled-components'
import { IThemeContextData } from '../DTOs/ThemeDTOs'
import { Theme } from '../styles/styled'
import { DarkTheme, LightTheme } from '../styles/theme'

type Props = {
  children: ReactNode
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData)

export const useTheme = () => useContext(ThemeContext)

export function useThemeContext(): IThemeContextData {
  return useContext(ThemeContext)
}

export const CustomThemeProvider: React.FC = ({
  children
}: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(DarkTheme)

  const toggleTheme = useCallback(() => {
    if (theme.title === 'dark') {
      setTheme(LightTheme)
    } else if (theme.title === 'light') {
      setTheme(DarkTheme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
