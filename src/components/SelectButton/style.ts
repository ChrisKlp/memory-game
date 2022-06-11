import { styled } from 'styles/stitches.config';
import Button from 'components/Button';

const SelectButtonStyled = styled(Button, {
  width: '100%',
  backgroundColor: '$blue200',

  '&:hover': {
    backgroundColor: '$blue500;',
  },

  '@md': {
    padding: '1.1rem 1.85rem 0.9rem',
    fontSize: '2.6rem',
    lineHeight: '3.2rem',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$blue800',
      },
    },
  },
});

export default SelectButtonStyled;
