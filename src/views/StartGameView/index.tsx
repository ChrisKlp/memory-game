import { useEffect } from 'react';
import Button from 'components/Button';
import SelectButton from 'components/SelectButton';
import Text from 'components/Text';
import * as S from 'views/StartGameView/style';
import { TGameSetup, TGameOptions } from 'models';
import { motion } from 'framer-motion';

type Props = {
  gameSetup: TGameSetup;
  gameOptions: TGameOptions;
  handleStartGameSelect: (name: string, option: string) => void;
  handleStartGameClick: () => void;
};

function StartGameView({
  gameSetup,
  gameOptions,
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
    <S.Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.Container>
        <S.LogoWrapper
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <S.StyledLogo />
        </S.LogoWrapper>
        <S.SettingsWrapper
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <S.Grid>
            {gameOptions.map(({ label, name, options }) => (
              <S.Group key={name}>
                <Text size="h3">{label}</Text>
                <S.Flex>
                  {options.map((option) => (
                    <SelectButton
                      key={option}
                      isActive={gameSetup[name as keyof TGameSetup] === option}
                      onClick={() => handleStartGameSelect(name, option)}
                    >
                      {option}
                    </SelectButton>
                  ))}
                </S.Flex>
              </S.Group>
            ))}
          </S.Grid>
          <Button
            as={motion.button}
            big
            onClick={handleStartGameClick}
            whileHover={{ scale: 1.01 }}
          >
            Start Game
          </Button>
        </S.SettingsWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

export default StartGameView;
