import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
    card: "#fafafa",
    primary: "#6200ee",
    grey: "#888888",
    darkGrey: "#555555",
    shadow: "#000000",
    black: "#000",
    white: "#FFF",
    lightGray: '#f9f9f9',
    darkGray: '#555',
    blue: '#00aaff',
    orange: '#ffaa00',
    lightOrange: '#ddd',
    darkGrayText: '#999',
  },
};

export const DarkThemeExtended = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    black: "#fff",
    white: "#000",
    background: "#121212",
    card: "#313131",
    primary: "#bb86fc",
    grey: "#b0b0b0",
    darkGrey: "#e0e0e0",
    shadow: "#000000",
    lightGray: '#1E1E1E',
    darkGray: '#D1D1D1',
    blue: '#00aaff',
    orange: '#ffaa00',
    lightOrange: '#ddd',
    darkGrayText: '#D3D3D3',

  }
};

export type ThemeColors = {
  background: string;
  card: string;
  primary: string;
  grey: string;
  darkGrey: string;
  shadow: string;
  white: string;
  black: string;
  lightGray: string,
  darkGray: string,
  blue: string,
  orange: string,
  lightOrange: string,
  darkGrayText: string,
};
