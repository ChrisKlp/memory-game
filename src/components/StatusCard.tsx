import { styled } from 'styles/stitches.config';
import Text from './Text';

const Wrapper = styled('div', {
  position: 'relative',
  display: 'grid',
  justifyItems: 'center',
  padding: '1rem',
  maxWidth: '25.5rem',
  backgroundColor: '$blue100',
  borderRadius: '0.5rem',
  gap: '0.2rem',

  '@md': {
    padding: '1.4rem 1.6rem',
    justifyItems: 'start',
    borderRadius: '1rem',
    gap: '0.5rem',
  },

  '@xl': {
    gridAutoFlow: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  variants: {
    isActive: {
      true: {
        backgroundColor: '$orange500',
      },
    },
    isPlayer: {
      true: {
        '&::after': {
          position: 'absolute',
          justifySelf: 'center',
          bottom: '100%',
          borderLeft: '0.8rem solid transparent',
          borderRight: '0.8rem solid transparent',
          borderBottom: '0.8rem solid $blue100',
          content: '',
        },

        '@md': {
          gridAutoFlow: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',

          '&::after': {
            borderWidth: '0 1.2rem 1.2rem 1.2rem',
          },
        },

        '@xl': {
          '&::after': {
            borderWidth: '0 1.9rem 1.9rem 1.9rem',
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      isActive: true,
      isPlayer: true,
      css: {
        '&::after': {
          borderBottom: '0.8rem solid $orange500',

          '@md': {
            borderBottomWidth: '1.2rem',
          },

          '@xl': {
            borderBottomWidth: '1.9rem',
          },
        },
      },
    },
  ],
});

const Value = styled(Text, {
  fontSize: '2.4rem',
  lineHeight: '3rem',

  '@xl': {
    fontSize: '3.2rem',
    lineHeight: '4rem',
  },

  variants: {
    big: {
      true: {
        '@md': {
          fontSize: '3.2rem',
          lineHeight: '4rem',
        },
      },
    },
  },
});

type Props = {
  isPlayer?: boolean;
  isActive?: boolean;
  label: string;
  value: string;
};

function StatusCard({ isActive, isPlayer, label, value }: Props) {
  return (
    <Wrapper isPlayer={isPlayer} isActive={isActive}>
      <Text size="small" color={isActive ? 'light' : 'default'}>
        {label}
      </Text>
      <Value color={isActive ? 'light' : 'dark'}>{value}</Value>
    </Wrapper>
  );
}

export default StatusCard;
