import Button from 'components/Button';
import SelectButton from 'components/SelectButton';
import Text from 'components/Text';
import { motion } from 'framer-motion';
import { Sizes, TGameOptions, TGameSetup, Themes } from 'models';
import * as S from 'views/StartGameView/style';

type Props = {
  gameOptions: TGameOptions;
  setup: TGameSetup;
  handleSelect: (
    name: keyof TGameSetup,
    option: number | Themes | Sizes
  ) => void;
  handleStart: () => void;
};

function StartGameView({
  gameOptions,
  setup,
  handleSelect,
  handleStart,
}: Props) {
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
                      isActive={setup[name as keyof TGameSetup] === option}
                      onClick={() =>
                        handleSelect(name as keyof TGameSetup, option)
                      }
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
            onClick={handleStart}
            whileHover={{ scale: 1.05 }}
          >
            Start Game
          </Button>
        </S.SettingsWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

export default StartGameView;
