import { styled } from 'styles/stitches.config';

const Text = styled('p', {
  color: '$blue300',
  fontWeight: 'bold',
  fontSize: '1.4rem',
  lineHeight: '1.7rem',

  '@md': {
    fontSize: '1.8rem',
    lineHeight: '2.2rem',
  },

  variants: {
    size: {
      small: {
        fontSize: '1.3rem',
        lineHeight: '1.6rem',

        '@md': {
          fontSize: '1.5rem',
          lineHeight: '1.9rem',
        },

        '@xl': {
          fontSize: '1.8rem',
          lineHeight: '2.2rem',
        },
      },
      h1: {
        fontSize: '2.4rem',
        lineHeight: '3rem',

        '@md': {
          fontSize: '4.8rem',
          lineHeight: '6rem',
        },
      },
      h2: {
        fontSize: '2rem',
        lineHeight: '2.5rem',

        '@md': {
          fontSize: '3.2rem',
          lineHeight: '4rem',
        },
      },
      h3: {
        fontSize: '1.5rem',
        lineHeight: '1.9rem',

        '@md': {
          fontSize: '2rem',
          lineHeight: '2.5rem',
        },
      },
    },
    color: {
      light: {
        color: '$light',
      },
      dark: {
        color: '$blue900',
      },
      default: {
        color: '$blue300',
      },
    },
    turnIndicator: {
      true: {
        display: 'none',

        '@xl': {
          display: 'block',
          color: '$blue900',
          fontSize: '1.3rem',
          lineHeight: '1.6rem',
          letterSpacing: '0.5rem',
          textTransform: 'uppercase',
        },
      },
    },
    align: {
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
    },
  },
});

export default Text;
