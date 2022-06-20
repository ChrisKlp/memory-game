import { styled } from 'styles/stitches.config';

export const Value = styled('span', {
  color: '$light',
  fontSize: '2.4rem',
  lineHeight: '3rem',
  fontWeight: 700,

  '@md': {
    fontSize: '4rem',
    lineHeight: '5rem',
  },
});

export const Wrapper = styled('button', {
  display: 'grid',
  placeItems: 'center',
  width: 'clamp(4.7rem, 12vw, 8.2rem)',
  aspectRatio: '1',
  backgroundColor: '$blue200',
  borderRadius: '50%',
  border: 0,

  '@md': {
    [`& ${Value}`]: {
      fontSize: '4rem',
      lineHeight: '5rem',
    },
  },

  variants: {
    state: {
      active: {
        backgroundColor: '$orange500',
      },
      hidden: {
        backgroundColor: '$blue800',
        cursor: 'pointer',
        transition: 'background-color 0.2s',

        '&:hover': {
          backgroundColor: '$blue500',
        },

        '@hoverNone': {
          '&:hover': {
            backgroundColor: '$blue800;',
          },
        },

        [`& ${Value}`]: {
          display: 'none',
        },
      },
      revealed: {
        backgroundColor: '$blue200',
      },
    },
    big: {
      true: {
        width: 'clamp(7.2rem, 12vw, 11rem)',

        [`& ${Value}`]: {
          fontSize: '3.6rem',
          lineHeight: '4.2rem',
        },

        '@md': {
          [`& ${Value}`]: {
            fontSize: '5rem',
            lineHeight: '6rem',
          },
        },
      },
    },
  },
});
