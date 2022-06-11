import Footer from 'components/Footer';
import Header from 'components/Header';
import { styled } from 'styles/stitches.config';

export const Container = styled('div', {
  margin: '0 auto',
  width: '87.2%',
  maxWidth: '110rem',
});

export const StyledHeader = styled(Header, {
  paddingTop: '2.4rem',
  marginBottom: '8rem',
});

export const StyledFooter = styled(Footer, {
  marginBottom: '2.4rem',
});
