import { TTimer } from 'models';
import { useEffect, useState } from 'react';

const useTimer = (): TTimer => {
  const [time, setTime] = useState(0);
  const [isTimeStarted, setIsTimeStarted] = useState(false);

  useEffect(() => {
    if (!isTimeStarted) return undefined;
    const interval = setTimeout(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isTimeStarted, time]);

  const formatTime = (): string => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(1, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const startTimer = () => setIsTimeStarted(true);
  const stopTimer = () => setIsTimeStarted(false);
  const resetTimer = () => setTime(0);

  return {
    clock: formatTime(),
    startTimer,
    stopTimer,
    resetTimer,
    isTimeStarted,
  };
};

export default useTimer;
