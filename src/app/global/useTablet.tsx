import { useState, useEffect, useLayoutEffect } from 'react';
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useTabletDevice = () => {
  const [isTabletDevice, setIsTabletDevice] = useState(false);

  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      if (width > 449 && width <= 991) {
        setIsTabletDevice(true);
      } else {
        setIsTabletDevice(false);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return isTabletDevice;
};
