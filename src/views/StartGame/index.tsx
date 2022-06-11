import { useEffect, useState } from 'react';
import Button from 'components/Button';
import SelectButton from 'components/SelectButton';
import Text from 'components/Text';
import { TConfig } from 'App';
import * as S from 'views/StartGame/style';

type Props = {
  config: TConfig;
};

type TSettings = {
  players: string;
  size: string;
  theme: string;
};

function StartGame({ config }: Props) {
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
    <S.Wrapper>
      <S.Container>
        <S.StyledLogo />
        <S.SettingsWrapper>
          <S.Grid>
            {config.map(({ label, name, options }) => (
              <S.Group key={name}>
                <Text size="h3">{label}</Text>
                <S.Flex>
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
                </S.Flex>
              </S.Group>
            ))}
          </S.Grid>
          <Button big>Start Game</Button>
        </S.SettingsWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

export default StartGame;
