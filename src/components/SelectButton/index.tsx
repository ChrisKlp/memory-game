import SelectButtonStyled from 'components/SelectButton/style';

type Props = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

export default function SelectButton({
  children,
  onClick,
  isActive = false,
}: Props) {
  return (
    <SelectButtonStyled as="span" active={isActive} onClick={onClick}>
      {children}
    </SelectButtonStyled>
  );
}
