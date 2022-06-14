import React, { useEffect } from 'react';
import * as S from 'components/Modal/style';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Modal({ children, className }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.removeAttribute('style');
    };
  }, []);
  return (
    <S.Wrapper>
      <S.Container className={className}>{children}</S.Container>
    </S.Wrapper>
  );
}

export default Modal;
