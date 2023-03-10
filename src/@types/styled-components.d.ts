/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import { light } from '../styles/themes/light'

export type ThemeInterface = typeof light

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
