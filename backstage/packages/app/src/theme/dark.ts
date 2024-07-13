import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';
import { ThemeColor } from './color';


export const darkTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,
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
    other: genPageTheme({
      colors: [ThemeColor.ORANGE, ThemeColor.BLACK],
      shape: shapes.wave,
    }),
  },
  
});