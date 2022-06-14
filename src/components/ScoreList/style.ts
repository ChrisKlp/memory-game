import { styled } from 'styles/stitches.config';

export const Wrapper = styled('ul', {
  marginBottom: '2.4rem',
  display: 'grid',
  gap: '0.8rem',

  '@md': {
    marginBottom: '4rem',
    gap: '1.6rem',
  },
});

export const ScoreItem = styled('li', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.2rem 1.6rem',
  borderRadius: '0.5rem',
  backgroundColor: '$blue100',

  '@md': {
    borderRadius: '1rem',
    padding: '1.6rem 3.2rem',
  },

  variants: {
    dark: {
      true: {
        backgroundColor: '$blue900',

        '& p': {
          color: '$light',
        },
      },
    },
  },
});
