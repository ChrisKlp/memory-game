import { TTimer } from 'models';
import { useEffect, useState } from 'react';

const useTimer = (): TTimer => {
  const [time, setTime] = useState(0);
  const [stop, setStop] = useState(true);

  useEffect(() => {
    if (stop) return undefined;
    const interval = setTimeout(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [stop, time]);

  const formatTime = (): string => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(1, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const startTimer = () => setStop(false);
  const stopTimer = () => setStop(true);
  const resetTimer = () => setTime(0);

  return { clock: formatTime(), startTimer, stopTimer, resetTimer };
};

export default useTimer;
