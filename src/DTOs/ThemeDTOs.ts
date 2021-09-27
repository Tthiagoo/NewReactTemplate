import { DefaultTheme } from 'styled-components'
import { Theme } from '../styles/styled'

export interface ITheme {
  title: string
  colors: {
    background: string
    text: string
    primary: string
  }
}

export interface IThemeContextData {
  toggleTheme(): void
  theme: Theme
}
