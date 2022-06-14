import { styled } from 'styles/stitches.config';

export const Wrapper = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#00000050',
  overflowY: 'auto',
  zIndex: 9999,
});

export const Container = styled('div', {
  display: 'grid',
  margin: '0 auto',
  width: '87.2%',
  maxWidth: '65.4rem',
  minHeight: '100vh',
  alignContent: 'center',
});
