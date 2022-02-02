import { createStitches } from '@stitches/react';
import {
  sand,
  olive,
  sage,
  slate,
  mauve,
  gray,
  whiteA,
  blackA,
  red,
  tomato,
  crimson,
  teal,
  green,
  grass,
  mint,
  yellow,
  amber,
  blue,
  sky,
  cyan,
} from '@radix-ui/colors';

export const { styled, getCssText, globalCss, createTheme } = createStitches({
  theme: {
    borderWidths: {
      1: '1px',
      2: '2px',
      3: '4px',
      4: '6px',
      5: '10px',
    },
    colors: {
      // Grays
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...olive,
      ...sand,

      // Overlarys
      ...whiteA,
      ...blackA,

      // Semantic
      // Error
      ...red,
      ...tomato,
      ...crimson,

      // Success
      ...teal,
      ...green,
      ...grass,
      ...mint,

      // Warning
      ...yellow,
      ...amber,

      // Info
      ...blue,
      ...sky,
      ...cyan,

      // Main
      main1: '#2a8aeb',
      main2: '#1e7cd9',
      main3: '#2f93f7',
      main4: '#2c80d4',
      main5: '#72B5F7',

      primary: '$main1',
      secondary: '$gray9',
      success: '$green9',
      error: '$red9',
      warning: '$yellow9',
      info: '$sky9',
      light: '$whiteA12',
    },
    fonts: {
      roboto: 'Roboto, sans-serif',
    },
    radii: {
      round: '50%',
      pill: '9999px',
    },
  },
  media: {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1400px)',
  },
});
