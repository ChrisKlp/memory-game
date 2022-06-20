import React, { useEffect } from 'react';
import * as S from 'components/Modal/style';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  mobile?: boolean;
};

function Modal({ children, className, mobile }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.removeAttribute('style');
    };
  }, []);
  return (
    <S.Wrapper
      mobile={mobile}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
    >
      <S.Container className={className}>{children}</S.Container>
    </S.Wrapper>
  );
}

export default Modal;
