import { useEffect } from 'react';
import Button from 'components/Button';
import SelectButton from 'components/SelectButton';
import Text from 'components/Text';
import * as S from 'views/StartGame/style';
import { TGameOptions } from 'gameOptions';
import { TGameConfig } from 'hooks/useStartGame';

type Props = {
  gameOptions: TGameOptions;
  gameConfig: TGameConfig;
  handleStartGameSelect: (name: string, option: string) => void;
  handleStartGameClick: () => void;
};

function StartGame({
  gameOptions,
  gameConfig,
  handleStartGameSelect,
  handleStartGameClick,
}: Props) {
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
            {gameOptions.map(({ label, name, options }) => (
              <S.Group key={name}>
                <Text size="h3">{label}</Text>
                <S.Flex>
                  {options.map((option) => (
                    <SelectButton
                      key={option}
                      isActive={
                        gameConfig[name as keyof TGameConfig] === option
                      }
                      onClick={() => handleStartGameSelect(name, option)}
                    >
                      {option}
                    </SelectButton>
                  ))}
                </S.Flex>
              </S.Group>
            ))}
          </S.Grid>
          <Button big onClick={handleStartGameClick}>
            Start Game
          </Button>
        </S.SettingsWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

export default StartGame;
