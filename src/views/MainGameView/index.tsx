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
}: Props) {
  const { size, theme } = setup;

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
        variants={S.boardAnimVariants}
        animate="visible"
        initial="hidden"
      >
        {cards.map(({ id, state, value, icon }) => (
          <motion.div key={id} variants={S.cardAnimVariants}>
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
      <S.StyledFooter isMulti={isMulti} isEnded={isEnded} players={players} />
    </S.Container>
  );
}

export default MainGameView;
