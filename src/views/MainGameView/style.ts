import Footer from 'components/Footer';
import Header from 'components/Header';
import { styled } from 'styles/stitches.config';

export const Container = styled('div', {
  margin: '0 auto',
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'center',
  gridTemplateRows: 'auto 1fr auto',
  width: '87.2%',
  height: '100vh',
  maxWidth: '110rem',
});

export const StyledHeader = styled(Header, {
  paddingTop: '2.4rem',
  marginBottom: '2.4rem',
  width: '100%',
});

export const StyledFooter = styled(Footer, {
  margin: '2.4rem 0',
  width: '100%',
});

export const Board = styled('div', {
  display: 'grid',
  gridTemplate: 'repeat(6, 1fr) / repeat(6, 1fr)',
  placeItems: 'center',
  gap: '1rem',
  maxWidth: '57.2rem',
  variants: {
    small: {
      true: {
        maxWidth: '53.2rem',
        gridTemplate: 'repeat(4, 1fr) / repeat(4, 1fr)',
      },
    },
    disabled: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
});
