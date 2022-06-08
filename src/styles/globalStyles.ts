import { reset } from 'stitches-reset';
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  ...reset,

  html: {
    fontSize: '62.5%',
  },

  body: {
    minWidth: '28rem',
    fontFamily: 'Atkinson Hyperlegible, sans-serif',
    fontSize: '1.4rem',
    background: '$light',
  },
});

export default globalStyles;
