import { styled } from 'styles/stitches.config';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Button from 'components/Button';

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Group = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
});

export const MenuButton = styled(Button, {
  display: 'block',

  '@md': {
    display: 'none',
  },
});

export const RestartButton = styled(Button, {
  display: 'none',

  '@md': {
    display: 'block',
  },
});

export const SecondaryButton = styled(Button, {
  display: 'none',

  '@md': {
    display: 'block',
  },
});

export const StyledLogo = styled(Logo, {
  display: 'block',
  width: '9.2rem',
  flexShrink: 0,

  '& path': {
    fill: '$blue900',
  },

  '@md': {
    width: '15.3rem',
  },
});

export const MenuWrapper = styled('div', {
  padding: '2.4rem',
  display: 'grid',
  gap: '1.6rem',
  backgroundColor: '$light',
  borderRadius: '1rem',
});
