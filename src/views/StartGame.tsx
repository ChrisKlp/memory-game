import { useEffect, useState } from 'react';
import { styled } from 'styles/stitches.config';
import Button from 'components/Button';
import SelectButton from 'components/SelectButton';
import Text from 'components/Text';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { TConfig } from 'App';

const Wrapper = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$blue900',
  overflowY: 'auto',
});

const Container = styled('div', {
  display: 'grid',
  margin: '0 auto',
  width: '87.2%',
  maxWidth: '65.4rem',
  minHeight: '100vh',
  alignContent: 'center',
  gap: '4.5rem',

  '@md': {
    gap: '7.8rem',
  },
});

const SettingsWrapper = styled('div', {
  padding: '2.4rem',
  marginBottom: '4rem',
  backgroundColor: '$light',
  borderRadius: '1rem',

  '@md': {
    padding: '5.6rem',
  },
});

const Flex = styled('div', {
  display: 'flex',
  gap: '1.1rem',

  '@md': {
    gap: '2.2rem',
  },
});

const Grid = styled('div', {
  marginBottom: '3.2rem',
  display: 'grid',
  gap: '2.4rem',

  '@md': {
    gap: '3.2rem',
  },
});

const Group = styled('div', {
  display: 'grid',
  gap: '1.1rem',

  '@md': {
    gap: '1.6rem',
  },
});

const StyledLogo = styled(Logo, {
  display: 'block',
  paddingTop: '4rem',
  width: '12.2rem',
  justifySelf: 'center',

  '& path': {
    fill: '$light',
  },

  '@md': {
    width: '15.3rem',
  },
});

type StartGameProps = {
  config: TConfig;
};

type TSettings = {
  players: string;
  size: string;
  theme: string;
};

function StartGame({ config }: StartGameProps) {
  const [settings, setSettings] = useState(
    config.reduce(
      (result, { name, options }) => ({
        ...result,
        [name]: options[0],
      }),
      {} as TSettings
    )
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.removeAttribute('style');
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <StyledLogo />
        <SettingsWrapper>
          <Grid>
            {config.map(({ label, name, options }) => (
              <Group key={name}>
                <Text size="h3">{label}</Text>
                <Flex>
                  {options.map((option) => (
                    <SelectButton
                      key={option}
                      isActive={settings[name as keyof TSettings] === option}
                      onClick={() =>
                        setSettings({ ...settings, [name]: option })
                      }
                    >
                      {option}
                    </SelectButton>
                  ))}
                </Flex>
              </Group>
            ))}
          </Grid>
          <Button big>Start Game</Button>
        </SettingsWrapper>
      </Container>
    </Wrapper>
  );
}

export default StartGame;
