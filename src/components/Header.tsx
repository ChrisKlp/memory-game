import { ReactComponent as Logo } from 'assets/logo.svg';
import { styled } from 'styles/stitches.config';
import Button from './Button';

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Group = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
});

const SecondaryButton = styled(Button, {
  display: 'none',

  '@md': {
    display: 'block',
  },
});

const StyledLogo = styled(Logo, {
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

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  return (
    <Wrapper className={className}>
      <StyledLogo />
      <Group>
        <Button>Menu</Button>
        <SecondaryButton secondary>New Game</SecondaryButton>
      </Group>
    </Wrapper>
  );
}

export default Header;
