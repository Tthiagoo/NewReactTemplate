/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import { DarkTheme } from './theme'

export type Theme = typeof DarkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
