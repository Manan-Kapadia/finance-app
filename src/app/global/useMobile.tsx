import { useState, useEffect, useLayoutEffect } from 'react';
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useMobileDevice = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      if (width <= 449) {
        setIsMobileDevice(true);
      } else {
        setIsMobileDevice(false);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobileDevice;
};
