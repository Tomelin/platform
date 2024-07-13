import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

import { ThemeColor } from './color';


export const lightTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      typography: {
        htmlFontSize: 56,
        fontFamily: 'Arial, sans-serif',
        h1: {
          fontSize: 54,
          fontWeight: 700,
          marginBottom: 10,
        },
        h2: {
          fontSize: 40,
          fontWeight: 700,
          marginBottom: 8,
        },
        h3: {
          fontSize: 32,
          fontWeight: 700,
          marginBottom: 6,
        },
        h4: {
          fontWeight: 700,
          fontSize: 28,
          marginBottom: 6,
        },
        h5: {
          fontWeight: 700,
          fontSize: 24,
          marginBottom: 4,
        },
        h6: {
          fontWeight: 700,
          fontSize: 20,
          marginBottom: 2,
        },
      },
      navigation: {
        background: ThemeColor.BLACK,
        indicator: ThemeColor.ORANGE,
        color: ThemeColor.WHITE,
        selectedColor: ThemeColor.WHITE,
      },

    },
  }),
  defaultPageTheme: 'home',
  pageTheme: {
    home: genPageTheme({
      colors: [ThemeColor.ORANGE, ThemeColor.BLACK],
      shape: shapes.wave,
    }),
    service: genPageTheme({
      colors: ['#8c4351', '#343b58'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#8c4351', '#343b58'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#8c4351', '#343b58'],
      shape: shapes.wave,
    }),
    other: genPageTheme({
      colors: [ThemeColor.ORANGE, ThemeColor.BLACK],
      shape: shapes.wave,
    }),
  },

});