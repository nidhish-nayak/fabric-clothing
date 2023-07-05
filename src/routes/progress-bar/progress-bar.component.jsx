import React, { useEffect, useState } from 'react';
import { Loader, ProgressBarContainer } from './progress-bar.styles';

const ProgressBar = () => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  progress >= 100 ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden';
  const text = `${progress}%`;

  return (
    <>
      {progress <= 100 ? (
        <ProgressBarContainer>
          <Loader data-text={text} progress={progress} />
        </ProgressBarContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProgressBar;
