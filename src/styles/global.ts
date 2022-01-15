import { globalCss } from '../../stitches.config';

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  'html, body, #__next': {
    height: '100vh',
    fontFamily: '$roboto',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
});
