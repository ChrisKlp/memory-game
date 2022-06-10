import { Status } from 'App';
import { styled } from 'styles/stitches.config';

const Value = styled('span', {
  color: '$light',
  fontSize: '2.4rem',
  lineHeight: '3rem',
  fontWeight: 700,
});

const Wrapper = styled('div', {
  display: 'grid',
  placeItems: 'center',
  width: '100%',
  maxWidth: '7.2rem',
  aspectRatio: '1',
  backgroundColor: '$blue200',
  borderRadius: '50%',

  variants: {
    status: {
      active: {
        backgroundColor: '$orange500',
      },
      hidden: {
        backgroundColor: '$blue800',
        cursor: 'pointer',
        transition: 'background-color 0.2s',

        '&:hover': {
          backgroundColor: '$blue500',
        },

        [`& ${Value}`]: {
          display: 'none',
        },
      },
      revealed: {
        backgroundColor: '$blue200',
      },
    },
    big: {
      true: {
        [`& ${Value}`]: {
          fontSize: '4rem',
          lineHeight: '5rem',
        },
      },
    },
  },
});

type Props = {
  value: string;
  status: Status;
  big?: boolean;
};

function GameCard({ value, status, big }: Props) {
  return (
    <Wrapper status={status} big={big}>
      <Value>{value}</Value>
    </Wrapper>
  );
}

export default GameCard;
