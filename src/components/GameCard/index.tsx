/* eslint-disable no-nested-ternary */
import * as S from 'components/GameCard/style';
import { motion } from 'framer-motion';
import { CardStates, Themes } from 'models';

type Props = {
  value: string;
  icon: string;
  theme: string;
  state: CardStates;
  big?: boolean;
  onClick: () => void;
};

function GameCard({ value, theme, icon, state, big, onClick }: Props) {
  return (
    <S.Wrapper
      as={motion.button}
      state={state}
      big={big}
      onClick={onClick}
      whileHover={state === CardStates.hidden ? { scale: 1.05 } : { scale: 1 }}
      initial={{ rotateX: 180 }}
      animate={
        state === CardStates.active
          ? { rotateX: 0 }
          : state === CardStates.revealed
          ? { rotateX: 0 }
          : { rotateX: 180 }
      }
    >
      {theme === Themes.icons ? (
        <S.Value as="i" className={`fa-solid ${icon}`} />
      ) : (
        <S.Value>{value}</S.Value>
      )}
    </S.Wrapper>
  );
}

export default GameCard;
