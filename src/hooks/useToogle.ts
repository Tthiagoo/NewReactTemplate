import { useCallback, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme } from '../styles/styled'
import { DarkTheme, LightTheme, MentoringTheme } from '../styles/theme'

export const useToggleTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(MentoringTheme)
  const toggleTheme = useCallback(() => {
    if (theme.title === 'dark') {
      setTheme(LightTheme)
    } else if (theme.title === 'light') {
      setTheme(DarkTheme)
    }
  }, [theme])
  return [theme, toggleTheme]
}
