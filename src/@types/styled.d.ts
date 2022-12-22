import 'styled-components'

declare module 'styled-components' {

  export interface ColorType {
    main: string;
    onMain: string;
  }

  export interface PalletteType {
    primary: ColorType;
    secondary: ColorType;
    background: ColorType;
    error: ColorType;
    surface: ColorType;
  }

  export interface DefaultTheme {
    colors: PalletteType;
 }
}
