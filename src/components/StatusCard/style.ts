import { styled } from 'styles/stitches.config';
import Text from 'components/Text';

export const Wrapper = styled('div', {
  position: 'relative',
  display: 'grid',
  justifyItems: 'center',
  padding: '1rem',
  width: '100%',
  maxWidth: '25.5rem',
  backgroundColor: '$blue100',
  borderRadius: '0.5rem',
  gap: '0.2rem',

  '@md': {
    padding: '1.4rem 1.6rem',
    gridAutoFlow: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '1rem',
    gap: '0.5rem',
  },

  variants: {
    isActive: {
      true: {
        backgroundColor: '$orange500',

        '&::after': {
          position: 'absolute',
          justifySelf: 'center',
          bottom: '100%',
          borderLeft: '0.8rem solid transparent',
          borderRight: '0.8rem solid transparent',
          borderBottom: '0.8rem solid $orange500',
          content: '',

          '@md': {
            borderWidth: '0 1.2rem 1.2rem 1.2rem',
          },

          '@xl': {
            borderWidth: '0 1.9rem 1.9rem 1.9rem',
          },
        },
      },
    },
    isPlayer: {
      true: {
        '@md': {
          gridAutoFlow: 'row',
        },
        '@lg': {
          gridAutoFlow: 'column',
        },
      },
    },
  },
});

export const Value = styled(Text, {
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
