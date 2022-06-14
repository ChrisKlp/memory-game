import { styled } from 'styles/stitches.config';

export const Value = styled('span', {
  color: '$light',
  fontSize: '2.4rem',
  lineHeight: '3rem',
  fontWeight: 700,
});

export const Icon = styled('i', {
  color: '$light',
  fontSize: '2.4rem',
  lineHeight: '3rem',
  fontWeight: 700,
});

export const Wrapper = styled('button', {
  display: 'grid',
  placeItems: 'center',
  width: '4.7rem',
  aspectRatio: '1',
  backgroundColor: '$blue200',
  borderRadius: '50%',
  border: 0,

  '@md': {
    width: '8.2rem',
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

        [`& ${Value}, & ${Icon}`]: {
          display: 'none',
        },
      },
      revealed: {
        backgroundColor: '$blue200',
      },
    },
    big: {
      true: {
        width: '7.2rem',

        [`& ${Value}`]: {
          fontSize: '4rem',
          lineHeight: '5rem',
        },

        '@md': {
          width: '11.8rem',
        },
      },
    },
  },
});
