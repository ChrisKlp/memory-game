import Button from 'components/Button';
import { styled } from 'styles/stitches.config';

export const Wrapper = styled('div', {
  padding: '2.4rem',
  backgroundColor: '$light',
  borderRadius: '1rem',

  '@md': {
    padding: '5.6rem',
    borderRadius: '2rem',
  },
});

export const Header = styled('div', {
  marginBottom: '2.4rem',
  display: 'grid',
  gap: '0.9rem',
  justifyItems: 'center',

  '@md': {
    marginBottom: '4rem',
    gap: '1.6rem',
  },
});

export const ButtonsGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',

  '@md': {
    flexDirection: 'row',
    gap: '1.4rem',
  },
});

export const StyledBigButton = styled(Button, {
  compoundVariants: [
    {
      big: true,
      css: {
        '@md': {
          padding: '1.3rem 2.8rem 1.4rem',
          fontSize: '2rem',
          lineHeight: '2.5rem',
        },
      },
    },
  ],
});
