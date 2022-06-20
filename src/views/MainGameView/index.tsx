import GameCard from 'components/GameCard';
import { motion } from 'framer-motion';
import {
  CardStates,
  Sizes,
  TGameCard,
  TGameSetup,
  TPlayersState,
} from 'models';
import * as S from 'views/MainGameView/style';

type Props = {
  boardDisabled: boolean;
  cards: TGameCard[];
  players: TPlayersState;
  isEnded: boolean;
  isMulti: boolean;
  setup: TGameSetup;
  handleCardClick: (id: number) => void;
  handleNewGame: () => void;
  handleRestart: () => void;
  setGameTime: (time: string) => void;
};

function MainGameView({
  boardDisabled,
  cards,
  players,
  isEnded,
  isMulti,
  setup,
  handleCardClick,
  handleNewGame,
  handleRestart,
  setGameTime,
}: Props) {
  const { size, theme } = setup;

  const list = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <S.Container>
      <S.StyledHeader
        handleNewGame={handleNewGame}
        handleRestart={handleRestart}
      />
      <S.Board
        as={motion.div}
        small={size === Sizes.small}
        disabled={boardDisabled}
        variants={list}
        animate="visible"
        initial="hidden"
      >
        {cards.map(({ id, state, value, icon }) => (
          <motion.div key={id} variants={item}>
            <GameCard
              key={id}
              theme={theme}
              icon={icon}
              value={value.toString()}
              state={state}
              big={size === Sizes.small}
              onClick={() => state === CardStates.hidden && handleCardClick(id)}
            />
          </motion.div>
        ))}
      </S.Board>
      <S.StyledFooter
        isMulti={isMulti}
        isEnded={isEnded}
        players={players}
        setGameTime={setGameTime}
      />
    </S.Container>
  );
}

export default MainGameView;
