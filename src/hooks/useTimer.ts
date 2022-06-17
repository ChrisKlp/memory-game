import { TTimer } from 'models';
import { useEffect, useState } from 'react';

const useTimer = (): TTimer => {
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!isStarted) return undefined;
    const interval = setTimeout(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isStarted, time]);

  const formatTime = (): string => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(1, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const startTimer = () => setIsStarted(true);
  const stopTimer = () => setIsStarted(false);
  const resetTimer = () => setTime(0);

  return { clock: formatTime(), startTimer, stopTimer, resetTimer, isStarted };
};

export default useTimer;
