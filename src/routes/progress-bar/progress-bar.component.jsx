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

  progress <= 150 ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  const text = progress <= 100 ? `${progress}%` : '100%';

  return (
    <>
      {progress <= 200 ? (
        <ProgressBarContainer>
          <Loader data-text={text} />
        </ProgressBarContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProgressBar;
