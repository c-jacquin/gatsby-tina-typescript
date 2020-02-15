import { useRef, useEffect } from 'react';
import { useTheme } from 'emotion-theming';
import { Theme } from '../styles/theme';

function useIsMobile() {
  const ref = useRef<boolean>();
  const theme = useTheme<Theme>();

  useEffect(() => {
    ref.current = window.matchMedia(`(max-width: ${theme.dimensions.breakpoints.md}px)`).matches;
  });
  return ref.current;
}

export default useIsMobile;
