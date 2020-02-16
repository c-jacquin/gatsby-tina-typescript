import _ from 'lodash';
import { useState, useEffect } from 'react';

export enum SCROLL_DIRECTION {
  UP = 'UP',
  DOWN = 'DOWN',
}

function getScrollDirection(
  scrollY: number,
  offsetThreshold: number,
  lastScrollY: number,
  currentScrollDirection?: SCROLL_DIRECTION | null,
) {
  if (scrollY <= offsetThreshold) {
    return null;
  }
  if (scrollY < lastScrollY) {
    return SCROLL_DIRECTION.UP;
  }
  if (scrollY > lastScrollY) {
    return SCROLL_DIRECTION.DOWN;
  }
  return currentScrollDirection;
}

function useScroll({ throttleTime = 150, offset = 0 }) {
  const [isTop, setTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState();
  const [scrollDirection, setScrollDirection] = useState();

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      const scrollY = window.pageYOffset;

      const nextScrollDirection = getScrollDirection(scrollY, offset, lastScrollY, scrollDirection);

      if (scrollDirection !== nextScrollDirection) {
        setScrollDirection(nextScrollDirection);
      }
      setLastScrollY(scrollY);

      if (scrollY > offset) {
        setTop(false);
      } else {
        setTop(true);
      }
    }, throttleTime);
    window.addEventListener('scroll', handleScroll, false);

    return () => window.removeEventListener('scroll', handleScroll, false);
  });

  return {
    scrollDirection,
    isTop,
  };
}

export default useScroll;
