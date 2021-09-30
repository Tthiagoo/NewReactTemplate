/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { createTheme } from '@mui/material/styles'
import { orange } from '@mui/material/colors'

import { createStyled } from '@mui/system'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}
const defaultTheme = createTheme({
  status: {
    danger: orange[500]
  }
})
export const styledCustom = createStyled({ defaultTheme })
