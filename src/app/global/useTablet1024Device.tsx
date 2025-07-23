import { useState, useEffect, useLayoutEffect } from 'react';
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useTablet1024Device = () => {
  const [isTabletDevice, setIsTabletDevice] = useState(false);

  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      if (width > 449 && width <= 1024) {
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
