import { styled } from 'styles/stitches.config';
import Button from './Button';

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

type Props = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

export default function SelectButton({
  children,
  onClick,
  isActive = false,
}: Props) {
  return (
    <SelectButtonStyled as="span" active={isActive} onClick={onClick}>
      {children}
    </SelectButtonStyled>
  );
}
