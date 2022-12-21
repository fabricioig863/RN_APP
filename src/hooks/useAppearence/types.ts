import { ColorSchemeName } from "react-native";

export type themeType = 'light'| 'dark'

export interface Props {
  theme: object;
  currentTheme: themeType;
}

export interface colorSchemeProps {
  colorScheme: ColorSchemeName;
}
