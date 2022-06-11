import * as S from 'components/StatusCard/style';
import Text from 'components/Text';

type Props = {
  isPlayer?: boolean;
  isActive?: boolean;
  label: string;
  value: string;
};

function StatusCard({ isActive, isPlayer, label, value }: Props) {
  return (
    <S.Wrapper isPlayer={isPlayer} isActive={isActive}>
      <Text size="small" color={isActive ? 'light' : 'default'}>
        {label}
      </Text>
      <S.Value color={isActive ? 'light' : 'dark'}>{value}</S.Value>
    </S.Wrapper>
  );
}

export default StatusCard;
