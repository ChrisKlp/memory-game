import { styled } from 'styles/stitches.config';

const Button = styled('button', {
  display: 'block',
  padding: '1rem 1.85rem',
  fontSize: '1.6rem',
  lineHeight: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '$light',
  border: 0,
  backgroundColor: '$orange500',
  borderRadius: '3.5rem',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.2s, color 0.2s',

  '&:hover': {
    backgroundColor: '$orange400',
  },

  '@md': {
    padding: '1.3rem 2.8rem 1.4rem',
    fontSize: '2rem',
    lineHeight: '2.5rem',
  },

  variants: {
    secondary: {
      true: {
        backgroundColor: '$blue100',
        color: '$blue800',

        '&:hover': {
          backgroundColor: '$blue500',
          color: '$light',
        },
      },
    },
    big: {
      true: {
        padding: '1.2rem 1.85rem 1.4rem',
        width: '100%',
        fontSize: '1.8rem',
        lineHeight: '2.2rem',

        '@md': {
          padding: '1.6rem 1.85rem 1.4rem',
          fontSize: '3.2rem',
          lineHeight: '4rem',
        },
      },
    },
  },
});

export default Button;
