import { ReactComponent as Logo } from 'assets/logo.svg';
import { styled } from 'styles/stitches.config';

export const Wrapper = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$blue900',
  overflowY: 'auto',
  zIndex: 10,
});

export const Container = styled('div', {
  display: 'grid',
  margin: '0 auto',
  width: '87.2%',
  maxWidth: '65.4rem',
  minHeight: '100vh',
  alignContent: 'center',
  gap: '4.5rem',

  '@md': {
    gap: '7.8rem',
  },
});

export const SettingsWrapper = styled('div', {
  padding: '2.4rem',
  marginBottom: '4rem',
  backgroundColor: '$light',
  borderRadius: '1rem',

  '@md': {
    padding: '5.6rem',
  },
});

export const Flex = styled('div', {
  display: 'flex',
  gap: '1.1rem',

  '@md': {
    gap: '2.2rem',
  },
});

export const Grid = styled('div', {
  marginBottom: '3.2rem',
  display: 'grid',
  gap: '2.4rem',

  '@md': {
    gap: '3.2rem',
  },
});

export const Group = styled('div', {
  display: 'grid',
  gap: '1.1rem',

  '@md': {
    gap: '1.6rem',
  },
});

export const StyledLogo = styled(Logo, {
  display: 'block',
  paddingTop: '4rem',
  width: '12.2rem',
  justifySelf: 'center',

  '& path': {
    fill: '$light',
  },

  '@md': {
    width: '15.3rem',
  },
});
